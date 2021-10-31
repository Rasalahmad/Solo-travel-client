import { useState, useEffect } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword,  createUserWithEmailAndPassword, updateProfile, GithubAuthProvider , signOut } from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleRegister = (email, password, name) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const signInUsingGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const logOut = () => {
        signOut(auth)
        .then( () => {
            setUser({});
        })
        .catch(error => setError(error.message));
    }

    const setUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
        .then(result => {
            setUser(result.user)
        })
        .catch(error => setError(error.message));
    }

    // observe wheather user state change or not
    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user);
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
    }, []);
    return {
        user,
        error,
        setUserName,
        handleRegister,
        handleLogin,
        signInUsingGoogle,
        signInUsingGithub,
        logOut,
        isLoading,
        setIsLoading
    }
}
export default useFirebase;