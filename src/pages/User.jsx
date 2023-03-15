import { useState, useEffect } from "react"
import UserComp from '../components/UserComp'
import Axios from 'axios'

function Users() {

    const [userData, setUsers] = useState([])

    const fetchData = () => {
        Axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            console.log(response.data)
            setUsers(response.data)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const renderList = () => {
        return userData.map((user) => {
            return (
                <UserComp user={user} />
            )
        })
    }

    return (
        <div>
            <div>
                <h1>USERS</h1>
            </div>
            <div>
                {renderList()}
            </div>
        </div>
    )
}

export default Users