function UserComp(props) {
    const { user } = props
    return (
        <div>
            <div>

            </div>
            <table className="table-auto border-solid">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                </tr>
            </table>
        </div>
    )
}

export default UserComp