import React from 'react';
import {UserDetails} from "./userDetails/UserDetails";
import {UserAddress} from "./userAddress/UserAddress";
import {Company} from "./company/company";

const User = ({user}) => {
    const {id, name, username, email, address,company} = user;
    return (
        <div>
            <UserDetails data={{id, name, username, email}}/>
            <UserAddress address={address}/>
            <Company company={{company}}/>
            <hr/>
        </div>
    );
};

export {User};