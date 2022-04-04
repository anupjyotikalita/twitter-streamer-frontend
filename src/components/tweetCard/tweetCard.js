import { Col, Row } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineHeart, AiOutlineRetweet } from 'react-icons/ai';
import { RiReplyLine } from 'react-icons/ri';
import { BsChatQuote } from 'react-icons/bs';
import { isEmpty } from 'utils/common';
import Styles from './tweetCard.module.css';

const TweetCard = ({ tweet }) => {
  const {
    data: {
      author_id: authorId,
      text,
      public_metrics: {
        retweet_count: totalRetweets,
        reply_count: totalReplies,
        like_count: totalLikes,
        quote_count: totalQuotes,
      },
    },
    includes: { users, media },
  } = tweet;

  const tweeter = users.find(user => user.id === authorId);
  const tweeterIsFound = !isEmpty(tweeter);

  const hasMedia = !isEmpty(media);

  return (
    <div className={Styles.container}>
      <Row>
        <Col xs={2} md={2} lg={3} className={Styles.profilePicContainer}>
          {tweeterIsFound && !isEmpty(tweeter.profile_image_url) ? (
            <img
              src={tweeter.profile_image_url}
              alt="profile"
              className={Styles.profilePic}
            />
          ) : (
            <CgProfile className={Styles.profilePic} />
          )}
        </Col>
        <Col xs={22} md={22} lg={21} className={Styles.tweetContainer}>
          <div className={Styles.profileDescriptionAndTime}>
            <span className={Styles.profileName}>
              {tweeterIsFound && tweeter.name}
            </span>
            <span className={Styles.userName}>
              {tweeterIsFound && `@${tweeter.username}`}
            </span>
          </div>
          <div className={Styles.textContainer}>{text}</div>
          <div className={Styles.imageContainer}>
            {hasMedia
              && media.map(item => (
                <img
                  src={item.url}
                  alt="media"
                  key={item.media_key}
                  className={Styles.image}
                />
              ))}
          </div>
          <div className={Styles.options}>
            <Row>
              <Col className={Styles.optionCol} span={6}>
                <AiOutlineRetweet size={20} className={Styles.optionIcon} />
                <p>{totalRetweets}</p>
              </Col>
              <Col className={Styles.optionCol} span={6}>
                <AiOutlineHeart size={20} className={Styles.optionIcon} />
                <p>{totalLikes}</p>
              </Col>
              <Col className={Styles.optionCol} span={6}>
                <RiReplyLine size={20} className={Styles.optionIcon} />
                <p>{totalReplies}</p>
              </Col>
              <Col className={Styles.optionCol} span={6}>
                <BsChatQuote size={20} className={Styles.optionIcon} />
                <p>{totalQuotes}</p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

TweetCard.propTypes = {
  tweet: PropTypes.object,
};

TweetCard.defaultProps = {
  tweet: {
    data: {},
    includes: {},
  },
};

export default TweetCard;
