import React, { useRef } from 'react'
import * as S from "./style"
import Item from "./Item"

import { Avatar } from '@mui/material'
// Icons
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import NightlightIcon from '@mui/icons-material/Nightlight';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import LogoutIcon from '@mui/icons-material/Logout';


export function DropDown({dropDownStatus,setDropDownStatus, AvatarRef }) {
  
  const ref = useRef(null);

  // close input when click outside of Component
  document.addEventListener("click", e => {
    if(ref.current && !ref.current.contains(e.target) &&
     AvatarRef.current && !AvatarRef.current.contains(e.target)) {
      setDropDownStatus(false)
     }

   });
  
  return (
  <S.Wrapper className='dropdown' ref={ref}  dropDownStatus={dropDownStatus}>
    
    <div className='dropdown__header'>
        <div className='profile'>
        <Avatar className='avatar' src="https://scontent.fisu10-2.fna.fbcdn.net/v/t39.30808-1/329520680_744463466953340_6607526300212552205_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=109&ccb=1-7&_nc_sid=f67be1&_nc_ohc=0-LmeHlySNIAX8fYgTT&_nc_ht=scontent.fisu10-2.fna&oh=00_AfDZiyf8wZxb-DHwrZc9baB2lVXQ3Fw3SEr26U6TkXWksg&oe=6417CC3A" />
         <p>Mstafa Fakhir</p>
        </div>
         <hr />
        <S.Button>See all profiles</S.Button>
    </div>

    <div className='dropdown__body'>

        <Item 
        title="Settings & privacy"
        Icon={SettingsIcon}
        />
        
        <Item 
        title="Help & suport"
        Icon={HelpIcon}
        />

        <Item 
        title="Display & accessibility"
        Icon={NightlightIcon}
        />

        <Item 
        title="Give feedback"
        Icon={AnnouncementIcon}
        />

        <Item 
        title="Log Out"
        Icon={LogoutIcon}
        />

        <div className='dropdown__footer'>
          <a href='#'>privacy &middot;</a> 
          <a href='#'>Terms &middot;</a>
          <a href='#'>Advertising &middot;</a>
          <a href='#'>Ad Choices &middot;</a>
          <a href='#'>Cookies &middot;</a>
          <a href='#'>More &middot;	</a>
          <a href='#'>Meta &copy;	2023</a>
        </div>
    </div>  

  </S.Wrapper>
  )
}
