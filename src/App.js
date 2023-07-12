import React, {useEffect, useState} from 'react';
import {Users} from "./components/users/users";

const App = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(users => setUsers(users))
    }, [])
    return (
        <div>
            <Users users={users}/>
        </div>
    );
};

export {App};