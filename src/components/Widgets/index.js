import React from 'react'
import { Avatar } from '@mui/material'
import Item from "./Item"
import * as S from "./style"

import {friends} from "../../data/friends"
// Icons

import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function Widgets() {

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
              <Avatar src="https://scontent.febl2-1.fna.fbcdn.net/v/t39.30808-1/329520680_744463466953340_6607526300212552205_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=109&ccb=1-7&_nc_sid=c231e7&_nc_ohc=0-LmeHlySNIAX-RoP3A&_nc_ht=scontent.febl2-1.fna&oh=00_AfBbYVEhZ3NRirhW11oOS8YuA7iRn5PKOcfmrvRYChsk5w&oe=641BC0BA" />
              <h4>Mstafa Fakhir</h4>
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
