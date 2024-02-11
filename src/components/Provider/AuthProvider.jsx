import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user
    const createUser = (email, password) =>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password)
    }
    // signIn user
    const signInUser = (email, password) =>{
        setLoading(true);
       return signInWithEmailAndPassword(auth, email, password)
    }

    // google SignIn
    const provider = new GoogleAuthProvider();
    const googleLogin = ()=>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    // signOut user
    const logOut =()=>{
        setLoading(true);
       return signOut(auth)
    }

    // observer
    useEffect(()=>{
     const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            console.log('observer', user);
            setLoading(false);
        })
        return ()=>{
            unSubscribe()
        }
    }, [user])


    const authInfo ={
        user,
        loading,
        createUser,
        signInUser,
        googleLogin,
        logOut,



    }

    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;