import counterReducers from "./reducers";
import { configureStore } from '@reduxjs/toolkit'

import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./sagas";
import { Provider } from "react-redux";

const counterSagaMiddleware = createSagaMiddleware();

const counterStore = configureStore(
    {
        reducer: {counter: counterReducers},
        middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({thunk: false}), counterSagaMiddleware]
    },
);

counterSagaMiddleware.run(rootSaga)

const CounterStoreProvider = (props) => {
    return (
        <Provider store={counterStore}>
            {props.children}
        </Provider>
    )
}


export default CounterStoreProvider;