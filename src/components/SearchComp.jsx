import { useState } from "react"
function SearchComp() {

    const fruits = [
        "Banana",
        "Apple",
        "Orange",
        "Grape",
        "Kiwi",
        "Cherry",
        "Persimmon",
        "Melon"
    ]

    const [search, setSearch] = useState("")

    const renderList = () => {
        return fruits.filter((fruit) => {
            return fruit.toLowerCase().includes(search.toLowerCase())
        }).map((fruit) => {
            return <div>
                <p className=" text-black bg-yellow-500 rounded-lg p-5 ">{fruit}</p>
            </div>
        })
    }

    const inputHandler = (event) => {
        setSearch(event.target.value)
    }


    return (
        <div>

            <div className="flex flex-col justify-center gap-3 w-1/4">
                <input type="text"
                    className="px-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    onChange={inputHandler}
                    placeholder="Search..." />

                {renderList()}

            </div>

            {/* <div className="flex flex-row gap-5 w-1/4 p-5 justify-center">
                <input
                    type="text"
                    className="px-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..."
                />
                <button
                    onClick={() => { inputHandler }}
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
            <div className="flex flex-col gap-3 w-1/4 p-5">
                {renderList()}
            </div> */}
        </div>
    )
}

export default SearchComp