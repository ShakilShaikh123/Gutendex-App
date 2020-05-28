import { put, takeLatest, call } from 'redux-saga/effects';
import * as API from '../../../apis';
import axios from 'axios';

export const watchBook = function* watchBook() {
    yield takeLatest('FETCH_BOOK', beginFetchBook);
}

function* beginFetchBook(action) {
    yield put({ type: 'FETCH_BOOK_LOADING' });
    try {
        const response = yield call(API.fetchBooks, action.genre, action.searchText);
        if (response.status == 200) {
            yield put({ type: 'FETCH_BOOK_SUCCESS', data: response.data });
        } else {
            yield put({ type: 'FETCH_BOOK_FAILED' });
        }
    }
    catch (error) {
        yield put({ type: 'FETCH_BOOK_FAILED' });
    }
}

