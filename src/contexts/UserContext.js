import React from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
;

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [error, setError] = useState('');
    const [user, setUser] = useState(null);
    const [cate, setCate] = useState(null)
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

    const logOut = () =>{
        return signOut(auth)
    }

    const updtaeData = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
        })
        return () =>{
            unsubscribe();
        }
    },[])

    useEffect(() =>{
        fetch('https://hero-learning-server.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCate(data));

    })

    const authInfo = {cate, createUser, signInUser, user, setUser, error, setError,emailVerfy, gogolePopUp, githubPopUp, logOut, updtaeData}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;