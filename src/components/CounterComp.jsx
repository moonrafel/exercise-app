import { useState } from "react"

function CounterComp() {

    const [number, setNumber] = useState(0)

    const increment = () => {
        let numVal = number + 1
        setNumber(numVal)
    }

    const decrement = () => {
        let numVal = number - 1
        setNumber(numVal)
    }

    return (
        <div className="grid place-items-center gap-5">
            <div>
                <p
                    className="text-3xl"
                >This is a counting machine.</p>
            </div>
            <div className="text-7xl bg-black rounded-full text-white font-semibold p-16">
                {number}
            </div>
            <div>
                <p>Click the button to increase or decrease number.</p>
            </div>
            <div className="flex gap-5">
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => { increment() }}>
                    INCREASE</button>
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => { decrement() }}>
                    DECREASE</button>
            </div>
        </div>
    )
}

export default CounterComp