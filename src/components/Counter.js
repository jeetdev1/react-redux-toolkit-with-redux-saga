import {useSelector, useDispatch} from "react-redux";
import { counterActions } from "../services/reducers";
import { sagaActions } from "../services/actions";
import "./Counter.css"
const Counter = () => {
    const value = useSelector(state=> state.counter.value)
    const dispatch = useDispatch()
    console.log(value)
    const increaseBy1Handler = () => {
        dispatch(counterActions.increaseBy1())
    }
    const decreaseBy1Handler = () => {
        dispatch(counterActions.decreaseBy1())
    }
    const increaseByValueHandler = () => {
        dispatch({type:sagaActions.INCREASE_BY_VALUE, payload: 5})
    }
    const decreaseByValueHandler = () => {
        dispatch(counterActions.decreaseByValue(5))
    }

    return (
        <div className="counter">
            <div>{value}</div>
            <div>
                <button onClick={increaseBy1Handler}>Increase By 1</button>
                <button onClick={decreaseBy1Handler}>Decrease By 1</button>
                <button onClick={increaseByValueHandler}>Increase By 5</button>
                <button onClick={decreaseByValueHandler}>Decrease By 5</button>
            </div>
        </div>
    )
}
export default Counter;