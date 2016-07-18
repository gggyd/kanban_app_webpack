
require('es6-promise').polyfill();
require('isomorphic-fetch');

export const QUERY_IMAGES = 'QUERY_IMAGES';

export function query() {
return (dispatch) => {
    fetch('http://local.domestore.cn:3500/api/v1/images')
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error('Bad response from server');
        }
        return response.json();
    })
    .then(function(result) {
      dispatch({
        type : QUERY_IMAGES,
        state: result
      });
    });
  }
}
