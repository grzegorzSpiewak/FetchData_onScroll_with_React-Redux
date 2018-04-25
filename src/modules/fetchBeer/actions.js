import axios from 'axios';

export const FETCHING_BEER = 'FETCHING_BEER';
export const FETCHING_BEER_FAILED = 'FETCHING_BEER_FAILED';
export const FETCHING_BEER_SUCCEED = 'FETCHING_BEER_SUCCEED';
export const LEAVING_DETAILS_PAGE = 'LEAVING_DETAILS_PAGE';

export function fetchBeerById(id) {
  return (dispatch) => {
    return axios.get(`https://api.punkapi.com/v2/beers/${id}`).then((beer) => {
      dispatch({
        type: FETCHING_BEER,
      });
      dispatch({
        type: FETCHING_BEER_SUCCEED,
        beer,
      });
    }).catch((error) => {
      dispatch({
        type: FETCHING_BEER_FAILED,
        error,
      });
    });
  };
}

export function cleanDetails() {
  return (dispatch) => {
    dispatch({
      type: LEAVING_DETAILS_PAGE,
    });
  }
}
