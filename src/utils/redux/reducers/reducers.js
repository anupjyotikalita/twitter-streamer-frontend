import ACTION_TYPES from '../actions/types';

export const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOADING.START_LOADING:
      return true;
    case ACTION_TYPES.LOADING.STOP_LOADING:
      return false;
    default:
      return state;
  }
};

export const tweetsReducer = (state = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.TWEETS.ADD:
      return [...state, action.payload];
    case ACTION_TYPES.TWEETS.CLEAR:
      return [];
    default:
      return state;
  }
};

const MAX_TWEETS_TO_ADD = 25;
export const maxTweetsToDisplayReducer = (state = MAX_TWEETS_TO_ADD, action) => {
  switch (action.type) {
    case ACTION_TYPES.MAX_TWEETS.ADD:
      return (state + MAX_TWEETS_TO_ADD);
    case ACTION_TYPES.MAX_TWEETS.RESET:
      return MAX_TWEETS_TO_ADD;
    default:
      return state;
  }
};

export const searchTextReducer = (state = '', action) => {
  if (action.type === ACTION_TYPES.SEARCH_TEXT.ADD) return action.payload;

  return state;
};

export const firstRuleReducer = (state = false, action) => {
  if (action.type === ACTION_TYPES.SEARCH_TEXT.FIRST_RULE_ADDITION) return true;

  return state;
};

export const errorReducer = (state = {}) => state;
