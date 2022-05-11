import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import '../styles/register.css';
import axios from '../api/axios';
const LOGIN_URL = '/';

const Login = () => {
    const { setAuth } = useAuth();
    const userRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate();
    const [user, setUser] = useState('');
  
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
  

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ username:user, password:pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));  
            localStorage.setItem('user-info', JSON.stringify(response?.data));         
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
         
            setAuth({ user,pwd, roles, accessToken });
            setUser('');
         
            setPwd('');
            navigate(from, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response' );
            } else if (err.response?.status === 400) {
                setErrMsg('Invalid Username or Password' );
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized' );
            } else {
                setErrMsg('Login Failed' );
            }
            errRef.current.focus();
        }
    }      
            

    return (
        <>
          
          
                <section className='col-sm-6 offset-sm-3'>
                    <p ref={errRef} className={errMsg ? "errmsg" :
                      "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                        className="form-control"
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        /> <br/>
                         

                        <label htmlFor="password">Password:</label>
                        <input
                        className="form-control"
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        /> <br/>
                        <button className="btn btn-primary">Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="/register">Sign Up</a>
                        </span>
                    </p>
                </section>
       
        </>
    )
}

export default Login;