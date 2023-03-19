import { Avatar } from '@mui/material'
import React from 'react'
import * as S from './style'

export default function MessageSender() {

    const formHandler = (e) => {
        e.preventDefault()

        // Do something here

        
    }   

  return (
    <S.Wrapper>
       <S.Top>
            <Avatar className='Avatar' src='https://scontent.febl9-1.fna.fbcdn.net/v/t39.30808-1/329520680_744463466953340_6607526300212552205_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=109&ccb=1-7&_nc_sid=f67be1&_nc_eui2=AeG09N-aWuvcqA-n9ne1VKWAKbTMYbJ_Y5AptMxhsn9jkLVADRE-KR5ZWfFvSX4RP-jh91mq8YChLLsbggafqTAG&_nc_ohc=0-LmeHlySNIAX-pDQM3&_nc_ht=scontent.febl9-1.fna&oh=00_AfCjdImadqcs6rQrI4xrygzMWJzdMpYeZWJfO3V8rTOphA&oe=641BC0BA' />
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
