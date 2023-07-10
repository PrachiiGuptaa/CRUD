import React,{ useContext} from 'react';
import { UserContext } from './UserContext';
import './UserList.css'

const UsersList = () => {
    const{ state, dispatch} = useContext(UserContext);

    const handleDeleteUser = (userId) => {
        dispatch({type:'DELETE_USER', payload:userId})
    };

    return(
        <div>
            <h2>User List:</h2>
            <ol className='userList'>
                {state.users.map((user) => (
                    <li className='list' key={user.id}>
                        {user.name} - {user.email}
                        <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                    </li>
                ))}
            </ol>
        </div>
    )
};

export default UsersList;