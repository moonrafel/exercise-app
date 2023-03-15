import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../features/counter/counterSlice"

function CounterRedux() {

    // useSelector = akses global state
    // useDispatch = akses action

    // useSelector 
    const count = useSelector((state) => state.counter.value)

    // useDispatch
    const dispatch = useDispatch()

    return (
        <div className="grid place-items-center gap-5">
            <div>
                COUNTER REDUX
            </div>
            <div className="text-3xl">
                {count}
            </div>
            <div className="flex gap-2">
                <button
                    class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => { dispatch(increment()) }}
                >PLUS</button>
                <button
                    class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => { dispatch(decrement()) }}
                >MINUS</button>
            </div>
        </div>
    )
}

export default CounterRedux