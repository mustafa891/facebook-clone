import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, storage } from "../firebase";
import { resizeImage } from "../Service/Utils/resizeImage";
import { v4 as uuidv4 } from 'uuid';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const AuthContext = createContext();

const UserContext = ({children}) => {

const [user, setUser] = useState({});
const [loading, setLoading] = useState(true);


const createUser = (fname, lname, email, password, file) => {
   return createUserWithEmailAndPassword(auth, email, password).then(async userCr => {
    const newUser = userCr.user;
    // upload user profile image
    const resizedImage = await resizeImage(file,40, 40)
    // upload file to Firebase storage
    const storageRef = ref(storage, `/images/${uuidv4()}`)

    uploadBytes(storageRef, file, {contentType: 'image/jpeg'}).
    then(async snap => {
        const downloadUrl = await getDownloadURL(snap.ref);

        updateProfile(newUser, {
            displayName: `${fname} ${lname}`,
            photoURL : downloadUrl,
         })    
    })

     return "created";
   }).catch(e => alert(e))
}

const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth,email, password).then(() => {
        return "signIned"
    }).catch(e => alert(e));
}

const logOut = () => {
    return auth.signOut();
}


useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth,userAuth => {
        setUser(userAuth)
        setLoading(false)
        console.log('auth state changed', userAuth);
    });

    return () => {
        unsubscribe()
    }

}, [])


const authInfo = {createUser, signIn, logOut, user, loading}
return <AuthContext.Provider value={authInfo}>
    {children}
</AuthContext.Provider>

}


export const useAuth = () => useContext(AuthContext)
export default UserContext;