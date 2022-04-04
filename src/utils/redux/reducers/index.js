import { combineReducers } from 'redux';
import {
  tweetsReducer, loadingReducer, errorReducer, maxTweetsToDisplayReducer,
  searchTextReducer, firstRuleReducer,
} from './reducers';

const combinedReducer = combineReducers({
  tweets: tweetsReducer,
  isLoading: loadingReducer,
  error: errorReducer,
  maxTweetsToDisplay: maxTweetsToDisplayReducer,
  searchText: searchTextReducer,
  firstRuleIsAdded: firstRuleReducer,
});

export default combinedReducer;
