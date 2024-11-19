import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";


export const AuthContext = createContext()
const auth = getAuth(app)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    const [user, setuser] = useState(null)

    const [loding, setloding] = useState(true)

    
    


    // register

    const createNewUser = (email, password) => {
        setloding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    //ovjarber

    useEffect(() => {
        const chachData = onAuthStateChanged(auth, (currentUser) => {
            setuser(currentUser)
            setloding(false)
        });
        return () => {
            chachData();
        }
    }, [])
    
    
    // log out
    
    const LogOut = () => {
        setloding(true)
        return signOut(auth)
    }
    
    
    //Log in 
    const LogIn = (email, password) => {
        setloding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const authInfo = {
        user,
        setuser,
        createNewUser,
        LogOut,
        LogIn,
        loding
    }
    console.log(user);
    
    
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;