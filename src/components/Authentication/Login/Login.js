import React, {useState} from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';



const Login = () => {

    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([]);
    const [error, setError] = useState('');


    const {signInUsingGoogle, handleLogin, signInUsingGithub} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/home";

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_url)
        })
        .catch(error => setError(error));
    }
     
    const handleGithubSignIn = () => {
        signInUsingGithub()
        .then(result => {
            history.push(redirect_url);
        })
        .catch(error => setError(error));
    }

    const handleManualSignIn = () => {
        handleLogin(email, password)
        .then(result => {
            history.push(redirect_url);
        })
        .catch(error => setError(error.message))
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }



    const handlePassword = (e) => {
        setPassword(e.target.value);
    }


    return (
        <div className='row mt-5 container'>
            <h2 className = 'my-5'>SIGN IN</h2>
            <div className = 'col-md-6 col-sm-12'>
                <img className = 'w-100' src="https://image.freepik.com/free-vector/isometric-data-protection-concept-with-parent-child-login-window-lock-3d_1284-63713.jpg" alt="" />
            </div>
            <div className='col-md-6 col-sm-12 mt-5'>
                <div className="form-floating mb-3">
                    <input onChange = {handleEmail} type="email" className="form-control" id="floatingInput" placeholder="youremail@gmail.com" required />
                    <label htmlFor="floatingInput"><i className="fas fa-envelope me-2 text-primary"></i>Email address</label>
                </div>
                <div className="form-floating">
                    <input onChange = {handlePassword} type="password" className="form-control" id="floatingPassword" placeholder="Password" required/>
                    <label htmlFor="floatingPassword"><i className="fas fa-unlock-alt me-2 text-primary"></i>Password</label>
                </div>
                <p className = 'text-danger text-start'>{error}</p>
                <button onClick = {handleManualSignIn} type = 'submit' className='btn btn-primary my-5'>Sign in</button>


                <p>New User? <Link to='/register'>Sign up</Link>
                </p>


                <button onClick = {handleGoogleSignIn} className='btn btn-primary me-2'><i className="fab fa-google p-1"></i>Sign Up With Google</button>
                <button onClick = {handleGithubSignIn} className='btn btn-secondary'><i className="fab fa-github p-1"></i>Sign Up With Github</button>
            </div>
        </div>
    );
};

export default Login;