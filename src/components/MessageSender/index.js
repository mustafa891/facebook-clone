import { Avatar } from '@mui/material'
import React, { useContext, useRef } from 'react'
import { usePost } from '../../context/PostContext';
import { useAuth} from '../../context/UserContext'
import * as S from './style'

export default function MessageSender() {

    const {createPost, createPostWithImage, progress} = usePost();
    const {user} = useAuth()
    const file = useRef(null);

    const formHandler = async (e) => {
        e.preventDefault()        
        const form = e.target;
        const value = e.target.input.value;
        
        if(file.current.files.length > 0) {
            await createPostWithImage(file.current.files[0], value)
        }else {
            createPost(value)
        }
        form.reset()
        file.current.value = "";
}   
console.log("Im from Message Sender");

  return (
    <S.Wrapper >
        <S.ProgressBar progress={progress} />
       <S.Top>
            <Avatar className='Avatar' src={user?.photoURL} />
            <form onSubmit={formHandler}>
             <S.MessageInput name="input" placeholder="What`s on your mind ?" />        
            </form>
        </S.Top>
        <S.Bottom>
            <S.Button>
                <img src='images/video.png' />
                <span>Live Video</span>
            </S.Button>

            <S.Button htmlFor="file">
                <img src='images/photo.png' />
                <span>Photo/video</span>
                <input ref={file} type="file" id="file" hidden/>
            </S.Button>
            
            <S.Button>
                <img src='images/feeling.png' />
                <span>Feeling/activity</span>
            </S.Button>

        </S.Bottom>     
    </S.Wrapper>
  )
}
