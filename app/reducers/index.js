import { combineReducers } from 'redux';
import counter from './counter';
import images from './images';

const rootRducer = combineReducers({
  counter,
  images
});

export default rootRducer;