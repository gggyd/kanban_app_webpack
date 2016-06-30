import { combineReducers } from 'redux';
import counter from './counter';

const rootRducer = combineReducers({
  counter
});

export default rootRducer;