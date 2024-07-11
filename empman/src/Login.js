import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPasssword] = useState("");
    const navigate = useNavigate();
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userName === 'admin' && password === 'password') {
          navigate('/dashboard');
        } else {
          alert('Invalid credentials');
        }
        console.log(userName, password);
      };
    

    return (
        <div>
                <div>
                <h2 align-item="center">Login Page</h2>
                    <form onSubmit={(e)=>{handleSubmit(e)}}>
                        <label>User Name</label>
                        <input
                            type='text'
                            name='username'
                            value={userName}
                            onChange={(e) =>
                                setUserName(e.target.value)
                            }
                        />
                        <label>Password</label>
                        <input
                            type='password'
                            name='password'
                            value={password}
                            onChange={(e) =>
                                setPasssword(e.target.value)
                            }
                        />
                        <button
                            type="submit"
                            value="Submit"
                            onClick={(e) => handleSubmit(e)}
                        >
                            Login
                        </button>
                    </form>
                </div>
        </div>
    )
}
