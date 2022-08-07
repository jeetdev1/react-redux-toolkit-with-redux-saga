import {takeEvery, put, all} from "redux-saga/effects"
import { sagaActions } from "./actions"
import { counterActions } from "./reducers"

const delay = (ms) => new Promise(res => setTimeout(res,ms));

//worker Saga
function* increaseSaga(action){
    yield delay(1000)
    yield put(counterActions.increaseByValue(action.payload))
}

//watcher Saga
function* increaseByValueSaga(){
    yield takeEvery(sagaActions.INCREASE_BY_VALUE,increaseSaga)
}

//worker Saga
function* decreaseSaga(action){
    yield delay(1000)
    yield put(counterActions.decreaseByValue(action.payload))
}

//watcher Saga
function* decreaseByValueSaga(){
    yield takeEvery(sagaActions.DECREASE_BY_VALUE, decreaseSaga)
}

export function* rootSaga(){
    yield all([increaseByValueSaga(),decreaseByValueSaga()])

}