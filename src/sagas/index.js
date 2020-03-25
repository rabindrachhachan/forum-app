import { all } from 'redux-saga/effects';
import { watchPost } from './post.saga';

//single entry point for all sagas
export default function* rootSaga() {
    yield all([
        watchPost(),
    ]);
}
