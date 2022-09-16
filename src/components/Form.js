import React, {useState} from 'react';
import './Form.css';

function Form ({onSave}) {
    const [setError] = useState()
    const [input, setInput] = useState({name: '', email: '', password: ''});
    
    function onSubmitHandler (err) {
        err.preventDefault();
        if(input.name.length === 0 || input.password.length === 0 || input.email.length === 0) {
            const name = input.name.length === 0 ? 'Name' : input.email.length === 0 ? 'Email' : 'Password';

            setError({
                title: 'Wrong input',
                message: `Please enter a correct ${name}`,
            });
            return;
        }
        if(!input.email.includes('@')) {
            setError({
                title: 'Wrong Email',
                message: 'Wrong email, enter @'
            });
            return;
        }
        onSave(input);
        setInput({name: '', email: '', password: ''});
    };

    function onChangeHandler (err) {
        const nameTarget = err.target.name;
        const valueTarget = err.target.value;
        setInput((prevState) => {
            return {...prevState, [nameTarget]: valueTarget};
        });
    };
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>Name</label>
                    <input type='text' name='name' placeholder='Name' onChange={onChangeHandler} value={input.name} />
                </div>
                <div>
                    <label>Email</label>
                    <input type='text' name='email' placeholder='Email' onChange={onChangeHandler} value={input.email} />
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' name='password' placeholder='Password' onChange={onChangeHandler} value={input.password} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Form;