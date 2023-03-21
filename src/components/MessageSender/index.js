import { Avatar } from '@mui/material'
import React from 'react'
import { useAuth } from '../../context/UserContext'
import * as S from './style'

export default function MessageSender() {

    const { user } = useAuth()

    const formHandler = (e) => {
        e.preventDefault()

        // Do something here
                
    }   

  return (
    <S.Wrapper>
       <S.Top>
            <Avatar className='Avatar' src={user?.photoURL} />
            <form onSubmit={formHandler}>
             <S.MessageInput placeholder="What`s on your mind ?" />
            </form>
        </S.Top>
        <S.Bottom>
            <S.Button>
                <img src='images/video.png' />
                <span>Live Video</span>
            </S.Button>

            <S.Button>
                <img src='images/photo.png' />
                <span>Photo/video</span>
            </S.Button>
            
            <S.Button>
                <img src='images/feeling.png' />
                <span>Feeling/activity</span>
            </S.Button>

        </S.Bottom>     
    </S.Wrapper>
  )
}
