import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Register = () => {


    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([]);
    const [name, setName] = useState([]);
    const [error, setError] = useState([]);

    const {signInUsingGoogle, handleRegister, signInUsingGithub, setUserName, setIsLoading} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/home"

    const handleGoogleSignUp = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_url);
            setIsLoading(true)
        })
        .catch(error => setError(error.message))
        .finally(() => setIsLoading(false))
    }
     
    const handleGithubSignup = () => {
        signInUsingGithub()
        .then(result => {
            history.push(redirect_url);
            setIsLoading(true)
        })
        .catch(error => setError(error.message))
        .finally(() => setIsLoading(false))
    }

    const handleManualSignup = () => {
        handleRegister(email, password, name)
        .then(result => {
            history.push(redirect_url);
            setUserName(name);
            setIsLoading(true)
        })
        .catch(error => setError(error.message))
        .finally(() => setIsLoading(false))
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }



    const handlePassword = (e) => {
        setPassword(e.target.value);
    }


    const handleName = (e) => {
        setName(e.target.value);
    }
    
    return (
        <div className='row mt-5 container'>
            <h2 className = 'my-5'>SIGN UP</h2>
            <div className = 'col-md-6 col-sm-12'>
                <img className = 'w-100 login-img' src="https://image.freepik.com/free-vector/isometric-data-protection-concept-with-parent-child-login-window-lock-3d_1284-63713.jpg" alt="" />
            </div>
            <div className='col-md-6 col-sm-12'>
                <div className="form-floating mb-3">
                    <input onChange = {handleName} type="text" className="form-control" id="floatingInput" placeholder="Your Name" />
                    <label htmlFor="floatingInput"><i className="fas fa-user me-2 text-primary"></i>Your Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange = {handleEmail} type="email" className="form-control" id="floatingInput" placeholder="youremail@gmail.com" />
                    <label htmlFor="floatingInput"><i className="fas fa-envelope me-2 text-primary"></i>Email address</label>
                </div>
                <div className="form-floating">
                    <input onChange = {handlePassword} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword"><i className="fas fa-unlock-alt me-2 text-primary"></i>Password</label>
                </div>
                <p className = 'text-danger'>{error}</p>
                <button onClick = {handleManualSignup} type = 'submit' className='btn btn-primary my-5'>Create Account</button>
                <p>Already have and account? <Link to='/login'>Sign in</Link>
                </p>
                <button onClick = {handleGoogleSignUp} type = 'submit' className='btn btn-primary m-2'><i className="fab fa-google p-1"></i>Sign Up With Google</button>
                <button onClick = {handleGithubSignup} type = 'submit' className='btn btn-secondary m-2'><i className="fab fa-github p-1"></i>Sign Up With Github</button>
            </div>
        </div>
    );
};

export default Register;