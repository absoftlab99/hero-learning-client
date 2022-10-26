import React from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext } from 'react';
import { useState } from 'react';
;

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const emailVerfy = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const gogolePopUp = (provider) =>{
        return signInWithPopup(auth, provider)
    }
    const githubPopUp = (gitProvider) =>{
        return signInWithPopup(auth, gitProvider)
    }

    const authInfo = {createUser, signInUser, user, setUser, error, setError,emailVerfy, gogolePopUp, githubPopUp}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;