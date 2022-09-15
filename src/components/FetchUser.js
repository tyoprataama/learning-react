import React, {useState} from 'react';
import './FetchUser.css'

function FetchUser ({users}) {
    const [number, setNumber] = useState({prev: 0, next: 5});

    const prevPage = () => {
        if(number.prev > 0) {
            setNumber((prevState) => {
                return {prev: prevState.prev - 5, next: prevState.next - 5};
            });
        }
    };

    const nextPage = () => {
        if(number.next < users.length) {
            setNumber((prevState) => {
                return {prev: prevState.prev + 5, next: prevState.next + 5};
            });
        }
    };

    return (
        <div className='user'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Jenis Kelamin</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {users.slice(number.prev, number.next).map((user, index) => {
                        return (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>{user.status}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className='user-btn'>
                <button onClick={prevPage}>◀︎</button>
                <button onClick={nextPage}>▶︎</button>
            </div>
        </div>
    );
};

export default FetchUser;