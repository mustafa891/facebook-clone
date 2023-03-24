import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { createContext, useContext, useState } from "react";
import { db, storage } from "../firebase";
import { v4 as uuidv4 } from 'uuid';
import { addDoc, collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
import { resizeImage } from "../Service/Utils/resizeImage";
import { useAuth } from "./UserContext";


const PostContext = createContext()


const PostProvider = ({children}) => {

    const [progress, setProgress] = useState(0)
    const [posts, setPosts] = useState([])
    const {user} = useAuth()

    const createPostWithImage = async (file,value) => {
        const storageRef = ref(storage, `/posts/${uuidv4()}`);
        const resizedImage = await resizeImage(file,500, 500)

        const uploadTask = uploadBytesResumable(storageRef, resizedImage, {contentType: "image/jpeg"});

        uploadTask.on("state_changed",
           // progress upload  
           (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
             setProgress(progress) 
             console.log(progress)
            },
           (error) => console.log(error),
            () => {
            getDownloadURL(uploadTask.snapshot.ref).then(photoURL => {

                    addDoc(collection(db, "posts"), {
                        user_id: user.uid,
                        username: user.displayName,
                        profileSrc: user.photoURL, 
                        text: value,
                        photoURL: photoURL,
                        created_at: new Date(),
                    })
                    setProgress(0)
                })
                    
            }
        )
    }

    const createPost = (value) => {
         if(value.trim().length > 0 ) {
            addDoc(collection(db, "posts"), {
                user_id: user.uid,
                username: user.displayName,
                profileSrc: user.photoURL, 
                text: value,
                photoURL: null,
                created_at: new Date(),
            })
        }
    }

    const getPosts = () => {
        onSnapshot(query(collection(db, "posts"), orderBy("created_at", "desc")), snapshot => {
            const docs = snapshot.docs;
            console.log(docs);
            const posts = docs.map(doc => {
               return {...doc.data(), id : doc.id}
              })
            setPosts(posts)
        })
     }

    
    const postInfo = {createPost, createPostWithImage,getPosts, posts,progress};

     return <PostContext.Provider value={postInfo}>
        {children}
     </PostContext.Provider>
}

export const usePost = () => useContext(PostContext);
export default PostProvider;