import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    decrement,
    increment,
    addFive,
    subFive,
} from '../../slices/counterSlice'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <br />
                <button
                    aria-label="add five"
                    onClick={() => dispatch(addFive())}
                >
                    +5
                </button>
                <button
                    aria-label="add five"
                    onClick={() => dispatch(subFive())}
                >
                    -5
                </button>
            </div>
        </div>
    )
}
