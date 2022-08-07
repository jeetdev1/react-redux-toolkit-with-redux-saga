import {takeEvery, put, all} from "redux-saga/effects"
import { sagaActions } from "./actions"
import { counterActions } from "./reducers"

const delay = (ms) => new Promise(res => setTimeout(res,ms));

//worker Saga
function* increaseSaga(){
    yield delay(1000)
    yield put(counterActions.increaseByValue(5)) 
}

//watcher Saga
function* increaseByValueSaga(){
    yield takeEvery(sagaActions.INCREASE_BY_VALUE,increaseSaga)
}

export function* rootSaga(){
    yield all([increaseByValueSaga()])

}