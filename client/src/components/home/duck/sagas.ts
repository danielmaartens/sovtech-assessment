import {all, call, put, takeLatest} from 'redux-saga/effects';
import Actions from './redux';
import {queryJoke} from '../../../graphql/helpers';

export function* getJokeSaga(action: any) {
    try {

        const response = yield call(() => queryJoke(action.category));
        yield put(Actions.setJoke(response.data.joke));

    } catch (error) {
        yield put({type: Actions.setJokeError().type, error});
    }
}

function* getJokeWatcher() {
    yield takeLatest(Actions.getJoke().type, getJokeSaga)
}
export default function* rootSaga() {
    yield all([
        getJokeWatcher(),
    ]);
}