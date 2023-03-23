import React from 'react'
import { Avatar } from '@mui/material'
import Item from "./Item"
import {friends} from "../../data/friends"
import { useAuth} from '../../context/UserContext'
import * as S from "./style"

// Icons

import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function Widgets() {

  const { user } = useAuth()

  return (
    <S.Widgets>
        
       <S.Wrapper> 

        <S.Top>
          <div className='top__header'>
          <h4>Your Pages and profiles</h4>
            <div className='btn'>
              <MoreHorizIcon />                    
            </div>
          </div>
          <div className="top__bottom">
              <Avatar src={user?.photoURL} />
              <h4>{user?.displayName}</h4>
          </div>
        </S.Top>

        <S.Bottom>
            <div className='bottom__header'>
              <h4>Contacts</h4>

                <div className='buttons'>
                  <div className='btn'>
                  <VideoCallIcon />
                  </div>
                  <div className='btn'>
                  <SearchIcon />
                  </div>
                  <div className='btn'>
                    <MoreHorizIcon />
                  </div>
                </div>

                 <div>
              </div>
            </div>


            <div className='bottom__body'>

                {friends.map((friend, key) => {
                    return <Item 
                     key={key}
                     Icon={Avatar}
                     title={friend.title}
                     profileSrc={friend.profileSrc}
                   />
                })}
                   
             </div>

        </S.Bottom>
        </S.Wrapper>
    </S.Widgets>
  )
}
