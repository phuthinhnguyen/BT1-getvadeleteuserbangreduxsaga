import React from "react";
import { useDispatch, useSelector } from "react-redux";

function User() {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    return (
        users.length>0 &&
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.website}</td>
                            <td onClick={()=>dispatch({type: "DELETEUSER",payload:user.id})}><button>Delete user</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default User;