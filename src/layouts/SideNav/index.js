import React, { useState } from 'react'
import Item from './Item'
import * as S from './style'

// Icons
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';

import { Avatar } from '@mui/material';
import { useAuth } from '../../context/UserContext';


export default function SideNav() {

  const {user} = useAuth()

  return (
    <S.SideBar>

      <S.Wrapper>
        
      {/* toptSide */}
      <S.topSide>
          <Item
          active={true} 
           Icon={HomeIcon}
           title="Home"
          />

          <Item
           Icon={Avatar}
           profileSrc={user?.photoURL}
           title={user?.displayName}
          />

      </S.topSide>

      {/* midSide */}
      <S.midSide>

      <Item 
       title="Watch"
       imgSrc="images/watch.png"
      />

      <Item 
       title="Friends"
       imgSrc="images/friends.png"
      />

     <Item 
       title="Gaming"
       imgSrc="images/gaming.png"
      />

     <Item 
       title="See all"
       Icon={AppsIcon}
       IconButton={true}
      />

      </S.midSide>
      {/* bottomSide */}
      <S.bottomSide>

      <Item 
       title="Junior Coders: Learn Program..."
       Icon={Avatar}
       profileSrc="https://scontent.febl4-2.fna.fbcdn.net/v/t39.30808-6/311519450_187168957211025_7733770965963587220_n.png?stp=c19.0.50.50a_cp0_dst-png_p50x50&_nc_cat=101&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=_k4Baj5VWEkAX-21NXi&_nc_ht=scontent.febl4-2.fna&oh=00_AfAmEZBSHrfSXgV1Yalk_1oVKELyKNytxpyFW4JITBkYIA&oe=641A8521"/>

      <Item 
       title="📖کتێب خوێنەران📚"
       Icon={Avatar}
       profileSrc="https://scontent.febl4-2.fna.fbcdn.net/v/t39.30808-6/330817216_1612821185825795_9185501224728410520_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=106&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=zL2cTgYMekoAX-VJwPV&_nc_ht=scontent.febl4-2.fna&oh=00_AfBLno3POdNJtqFc0uAYk-L5E8S-OoWz5JMdvN4_6nyaUw&oe=641B4519"
      />

      <Item 
       title="Graphic Design | گرافیك دیزاین"
       Icon={Avatar}
       profileSrc='https://scontent.febl4-2.fna.fbcdn.net/v/t39.30808-6/315638595_1596888334114604_139954471443627679_n.jpg?stp=c28.0.50.50a_cp0_dst-jpg_p50x50&_nc_cat=107&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=OmSnK1NnwVIAX9WliVs&_nc_ht=scontent.febl4-2.fna&oh=00_AfD8-v2TjztrFSD9HY2vqdwMbdydXrcFiHQwzpQ3GhlyAw&oe=641A7785'
      />

      </S.bottomSide>
      </S.Wrapper>

    </S.SideBar>
  )
}
