import { all } from 'redux-saga/effects';

import { watchBook } from './Books/bookSaga';

const rootSaga = function* rootSaga() {
  yield all([
    watchBook()
  ]);
};

export default rootSaga;