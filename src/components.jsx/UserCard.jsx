

const UserCard = ({ user }) => {
return (
<div>
    <h2>{user.first_name} {user.last_name}</h2>
    <ul>
        <li><span>Email: </span>{user.email}</li>
        <li><span>Birthday: </span>{user.birthday}</li>
    </ul>
</div>
)
}

export default UserCard