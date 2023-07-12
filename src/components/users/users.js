import React from 'react';
import {User} from "./user/user";

const Users = ({users}) => {
    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};