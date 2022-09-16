import React from 'react';
import './FormList.css';

function FormList({user}) {
    return (
        <div>
            {user.map((user, a) => {
                return (
                    <div className='user-form'>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <p>Password: {user.password}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default FormList;