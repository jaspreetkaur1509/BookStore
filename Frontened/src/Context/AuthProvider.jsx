import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext();
export default function AuthProvider({children}) {
    const initialAuthUser = localStorage.getItem("Users ");
    //console.log("Initial Auth User from localStorage:", initialAuthUser);
    const [authUser, setAuthUser] = useState(
        initialAuthUser ? JSON.parse(initialAuthUser) : undefined
    )
    console.log("Auth User State:", authUser);
    return(
        <AuthContext.Provider value={[authUser, setAuthUser]}>
           {children}
        </AuthContext.Provider>
    )};

export const useAuth=() => useContext(AuthContext);
