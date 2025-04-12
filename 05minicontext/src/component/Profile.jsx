import React, { useContext } from 'react';
import UserContext from '../context/UserContext'
function Profile() {

    const {user} = useContext(useContext)
    if(!user) return <div>Login Please</div>
    return (
    <div>
     Welcome{user.username}
    </div>
  );
}

export default Profile;