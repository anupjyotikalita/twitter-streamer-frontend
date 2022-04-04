import React, { useEffect } from 'react';
import SocketClient from 'socket.io-client';
import { Button } from 'antd';
import Header from 'components/header';
import TweetCard from 'components/tweetCard';
import { useDispatch, useSelector } from 'react-redux';
import ACTION_TYPES from 'utils/redux/actions/types';
import Spinner from 'components/spinner/spinner';
import { isEmpty } from 'utils/common';
import { addTweetToStore } from 'utils/redux/actions/actions';
import Styles from './homepage.module.css';

const HomePage = () => {
  const isLoading = useSelector(state => state.isLoading);
  const tweets = useSelector(state => state.tweets);
  const maxTweetsToDisplay = useSelector(state => state.maxTweetsToDisplay);
  const searchText = useSelector(state => state.searchText);
  const firstRuleIsAdded = useSelector(state => state.firstRuleIsAdded);
  const canShowAllTweets = tweets.length <= maxTweetsToDisplay;
  const hasSearchText = !isEmpty(searchText);

  const dispatch = useDispatch();
  useEffect(() => {
    if (firstRuleIsAdded) {
      dispatch({ type: ACTION_TYPES.LOADING.START_LOADING });
      const socket = SocketClient(process.env.BACKEND_URL);
  
      socket.on('connect', () => {
        dispatch({ type: ACTION_TYPES.LOADING.STOP_LOADING });
      });
  
      socket.on('tweet', (tweet) => {
        dispatch(addTweetToStore(tweet));
      });
    }
  }, [firstRuleIsAdded]);

  const handleLoadMore = () => dispatch({ type: ACTION_TYPES.MAX_TWEETS.ADD });

  return (
    <div className={Styles.container}>
      <Header />
      {(isLoading || (hasSearchText && !tweets.length)) ? (
        <Spinner />
      ) : (
        <div className={Styles.tweetsContainer}>
          {hasSearchText ? (
            <>
              {tweets
                .filter((_, index) => index < maxTweetsToDisplay)
                .map((tweet, index) => (
                  <TweetCard key={`${tweet.id}_${index}`} tweet={tweet} />
                ))}
              <Button
                type="primary"
                size="large"
                onClick={handleLoadMore}
                style={{ display: canShowAllTweets ? 'none' : 'block' }}
                disabled={canShowAllTweets}
              >
                Load More
              </Button>
            </>
          ) : (
            <p className={Styles.provideText}>Please provide a text to search</p>
          )}
        </div>
      )}
      )
    </div>
  );
};

export default HomePage;
