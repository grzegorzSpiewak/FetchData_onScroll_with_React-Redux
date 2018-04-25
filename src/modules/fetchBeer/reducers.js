import {
  FETCHING_BEER,
  FETCHING_BEER_SUCCEED,
  FETCHING_BEER_FAILED,
  LEAVING_DETAILS_PAGE
} from './actions';

const INITIAL_STATE = {
  beer: [],
  loaded: false
};

function beerByIdReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCHING_BEER:
    return { ...state, beer: [], loaded: false };
  case FETCHING_BEER_SUCCEED:
    return { ...state, beer: action.beer.data[ 0 ], loaded: true };
  case FETCHING_BEER_FAILED:
    return { ...state, beer: [], loaded: false };
  case LEAVING_DETAILS_PAGE:
    return { ...state, beer: [], loaded: false };
  default:
    return state;
  }
}

export default beerByIdReducer;
