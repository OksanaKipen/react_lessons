import React from 'react';

const UserAddress = ({address}) => {
    const {city, street} = address;
    return (
        <div>
            <div>city: {city}</div>
            <div>street: {street}</div>
        </div>
    );
};

export {UserAddress};