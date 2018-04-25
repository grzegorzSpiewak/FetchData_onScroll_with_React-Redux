import {
  FETCHING_BEERS,
  FETCHING_BEERS_SUCCEED,
  FETCHING_BEERS_FAILED,
  NO_MORE_BEERS
} from './actions';

const INITIAL_STATE = {
  beers: [],
  loaded: false,
  stopFetching: false
};

function beerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCHING_BEERS:
    return { ...state, loaded: false, stopFetching: false };
  case FETCHING_BEERS_SUCCEED:
    return { ...state, beers: state.beers.concat(action.beers.data), loaded: true, stopFetching: false };
  case FETCHING_BEERS_FAILED:
    return { ...state, beers: [], loaded: false, stopFetching: true };
  case NO_MORE_BEERS:
    return { ...state, beers: state.beers.concat(action.beers.data), loaded: true, stopFetching: true };
  default:
    return state;
  }
}

export default beerReducer;
