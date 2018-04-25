import axios from 'axios';

export const FETCHING_BEERS = 'FETCHING_BEERS';
export const FETCHING_BEERS_FAILED = 'FETCHING_BEERS_FAILED';
export const FETCHING_BEERS_SUCCEED = 'FETCHING_BEERS_SUCCEED';
export const NO_MORE_BEERS = 'NO_MORE_BEERS';

export function fetchBeers(page, beersLength) {
  return (dispatch) => {
    return axios.get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${beersLength}`).then((beers) => {
      if (beers.data.length < beersLength) {
        dispatch({
          type: NO_MORE_BEERS,
          beers
        });
      } else {
        dispatch({
          type: FETCHING_BEERS,
        });
        dispatch({
          type: FETCHING_BEERS_SUCCEED,
          beers,
        });
      }
    }).catch((error) => {
      dispatch({
        type: FETCHING_BEERS_FAILED,
        error,
      });
    });
  };
}
