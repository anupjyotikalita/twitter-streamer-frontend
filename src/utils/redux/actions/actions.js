import axios from 'axios';
import { message } from 'antd';
import { isEmpty } from 'utils/common';
import ACTION_TYPES from './types';

const { BACKEND_URL } = process.env;

export const addTweetToStore = tweet => async (dispatch, getState) => {
  const { searchText } = getState();

  if (!isEmpty(searchText)) {
    dispatch({ type: ACTION_TYPES.TWEETS.ADD, payload: tweet });
  }
};

export const submitSearchWord = searchText => async (dispatch, getState) => {
  const emptySearchText = isEmpty(searchText);
  dispatch({ type: ACTION_TYPES.LOADING.START_LOADING });
  dispatch({ type: ACTION_TYPES.MAX_TWEETS.RESET });
  dispatch({ type: ACTION_TYPES.SEARCH_TEXT.ADD, payload: emptySearchText ? '' : searchText });
  
  const { firstRuleIsAdded } = getState();

  if (!firstRuleIsAdded && !emptySearchText) {
    dispatch({ type: ACTION_TYPES.SEARCH_TEXT.FIRST_RULE_ADDITION });
  }

  try {
    if (emptySearchText) {
      await axios.delete(`${BACKEND_URL}/rules`);
    } else {
      await axios.post(`${BACKEND_URL}/rules`, { searchText });
    }

    dispatch({ type: ACTION_TYPES.TWEETS.CLEAR });
  } catch (error) {
    message.error('Something went wrong');
  }

  dispatch({ type: ACTION_TYPES.LOADING.STOP_LOADING });
};
