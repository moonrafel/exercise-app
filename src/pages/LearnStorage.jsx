import Cookies from 'js-cookie'

function LearnStorage() {

    // LOCAL STORAGE

    const addLocalStorage = () => {
        localStorage.setItem("localUserToken", "This is the local user token")
    }

    const removeLocalStorage = () => {
        localStorage.removeItem("localUserToken")
    }

    // SESSION STORAGE

    const addSessionStorage = () => {
        sessionStorage.setItem("sessionUserToken", "This is the session user token")
    }

    const removeSessionStorage = () => {
        sessionStorage.removeItem("sessionUserToken")
    }

    // COOKIE STORAGE

    const addCookie = () => {
        Cookies.set("cookieUserToken", "This is the cookie user token", { expires: 7, path: "" })
    } // expires in 7 days

    const removeCookie = () => {
        Cookies.remove("cookieUserToken", { path: "" })
    }

    // RETURN

    return (
        <div className="flex flex-cols-3 w-3/4 m-auto gap-3 justify-center">
            <div>
                <p>Local Storage</p>
                <button
                    className="rounded-md p-2 mr-2 bg-green-400"
                    onClick={() => { addLocalStorage() }}
                >Add Local</button>
                <button
                    className="rounded-md p-2 mr-2 bg-red-500"
                    onClick={() => { removeLocalStorage() }}
                >Remove Local</button>
            </div>
            <div>
                <p>Session Storage</p>
                <button
                    className="rounded-md p-2 mr-2 bg-green-400"
                    onClick={() => { addSessionStorage() }}
                >Add Session</button>
                <button
                    className="rounded-md p-2 mr-2 bg-red-500"
                    onClick={() => { removeSessionStorage() }}
                >Remove Session</button>
            </div>
            <div>
                <p>Cookie</p>
                <button
                    className="rounded-md p-2 mr-2 bg-green-400"
                    onClick={() => { addCookie() }}
                >Add Cookie</button>
                <button
                    className="rounded-md p-2 mr-2 bg-red-500"
                    onClick={() => { removeCookie() }}
                >Remove Cookie</button>
            </div>
        </div>
    )
}


export default LearnStorage