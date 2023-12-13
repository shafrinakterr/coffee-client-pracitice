import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebase.config";
const auth = getAuth(app);


export const authContext = createContext(null)

const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //  loging user
    const singin = (email, password)=>{
        // setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const userInfo = {
        user,
        loading,
        createUser,
        singin


    }
    return (
        <authContext.Provider value={userInfo}>
            {children}
        </authContext.Provider >
    );
};

export default Authprovider;