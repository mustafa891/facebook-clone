import React from 'react'
import * as S from "./style"

// Icons
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';


import { Avatar } from '@mui/material';


export default function Post({username, created_at, text, imgSrc, profileSrc, className}) {
  return (
    <S.Post className={className}>
        <S.PostHeader>
            <div className='info'>
                <Avatar src={profileSrc && profileSrc} />
                <div>
                  <span>{username}</span>
                  <p>{created_at}</p>
                </div>
            </div>

            <div className='buttons'>
                <div className='btn'>
                   <MoreHorizIcon />                    
                </div>

                <div className='btn'>
                   <CloseIcon />                    
                </div>

            </div>
        </S.PostHeader>

        <S.PostBody>
            <p className='post__text'>
             {text}
            </p>
            {imgSrc && 
            <div className='post__image'>
              <img src={imgSrc} />
            </div>
           }
        </S.PostBody>

        <S.PostFooter>
            <S.Button>
              <ThumbUpOffAltIcon />
              <span>Like</span>
            </S.Button> 

            <S.Button>
                <ChatBubbleOutlineIcon />
                <span>Comment</span>
            </S.Button>

            <S.Button>
                <span>Share</span>
            </S.Button>

        </S.PostFooter>
    </S.Post>
  )
}
