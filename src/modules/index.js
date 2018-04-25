import { combineReducers } from 'redux';
import beers from './fetchBeers/reducers';
import beer from './fetchBeer/reducers';

const rootReducer = combineReducers({
  beers,
  beer
});

export default rootReducer;
