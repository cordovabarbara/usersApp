import './styles/userCard.css'


const UserCard = ({ user, deleteUserById, setUpdateInfo, setFormClose }) => {

    const handleDelete = () => {
        deleteUserById(user.id)
        swal({
            title:"User deleted Successfully",
            icon:"warning",
            button: "Aceptar",
        });
    }

    const handleUpdate = () => {
        setUpdateInfo(user)
        setFormClose(false)
    }

return (
<div className="user">
    <h2 className="user__name">{user.first_name} {user.last_name}</h2>
    <ul className="user__list">
        <li className="user__item">
            <span className="user__label">Email</span>
            <span className="user__value">{user.email}</span>
        </li>
        <li className="user__item">
        <span className="user__label">Birthday </span>
        <span className="user__value">{user.birthday}</span></li>
    </ul>
    <footer className="user__footer">
        <button className="user__btn user__delete" onClick={handleDelete}>
            <i className="bx bxs-trash-alt user__icon"></i> 
        </button>
        <button className="user__btn user__update" onClick={handleUpdate}>
            <i class='bx bxs-edit user__icon'></i>
        </button>
    </footer>
</div>
)
}

export default UserCard