import { useEffect, useState } from "react";

function UsersList(){
const [users, setUsers] = useState([]) 
useEffect (() => {
    const response =  fetch("https://jsonplaceholder.typicode.com/users")

    response.then(r => (r.json())).then(body => setUsers(body))
}, [])


return(
    <div> response {users.map(u => <div> {u.name} email: {u.email} </div>)}
    </div>
)
}
export default UsersList;