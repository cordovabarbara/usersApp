

const UserCard = ({ user, deleteUserById }) => {

    const handleDelete = () => {
        deleteUserById(user.id)
    }


return (
<div>
    <h2>{user.first_name} {user.last_name}</h2>
    <ul>
        <li><span>Email: </span>{user.email}</li>
        <li><span>Birthday: </span>{user.birthday}</li>
    </ul>
    <footer>
        <button onClick={handleDelete}>
            <i className="bx bx-trash"></i>
        </button>
    </footer>
</div>
)
}

export default UserCard