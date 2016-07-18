import {
  QUERY_IMAGES
} from '../actions/images';
require('es6-promise').polyfill();
require('isomorphic-fetch');

export default function images(state = [], action) {
  switch(action.type) {
    case QUERY_IMAGES:
      return action.state;
    default:
      return state;
  }
}