

const UserCard = ({ user, deleteUserById, updateUserById }) => {

    const handleDelete = () => {
        deleteUserById(user.id)
    }

    const handleUpdate = () => {
        updateUserById(user.id)
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
        <button onClick={handleUpdate}>
            <i className="bx bx-edit-alt"></i>
        </button>
    
    </footer>
</div>
)
}

export default UserCard