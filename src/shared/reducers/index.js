import { combineReducers } from 'redux';
import setMainReducer from './main'

const serverStoreBuilder = (state) => combineReducers({
  main: setMainReducer(state)
});

const clientStoreBuilder = ({main}) => combineReducers({
  main: setMainReducer(main)
});

export {
  serverStoreBuilder,
  clientStoreBuilder
}
