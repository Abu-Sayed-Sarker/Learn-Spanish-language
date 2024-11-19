import { createContext, useState } from "react";

export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    const [user, setuser] = useState(null)
    const authInfo = {
        user,
        setuser
    }
    
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;