import counterReducers from "./reducers";
import { configureStore } from '@reduxjs/toolkit'


const counterStore = configureStore({
    reducer: {counter: counterReducers}
});

export default counterStore;