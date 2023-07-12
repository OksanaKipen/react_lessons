import React, {useState} from 'react';
import {UserContainer} from "./components/userContainer/userContainer";
import {Posts} from "./components/posts/posts";

const App = () => {
    const [userId, setUserId] = useState(null);
    return (
        <div>
            <UserContainer setUserId={setUserId}/>
            <hr/>
            {userId&&<Posts userId={userId}/>}
        </div>
    );
};

export {App};