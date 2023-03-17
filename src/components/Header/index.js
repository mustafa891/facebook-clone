import React, { useRef, useState } from 'react'
import { Wrapper, LeftWrapper, MidWrapper, RightWrapper, Content, CustomeAvatar } from './header.style'
import { Avatar } from '@mui/material'
import DropDown from '../DropDown';

function Header() {

    const [inputStatus, setInputStatus] = useState(false);
    const [dropDownStatus, setDropDownStatus] = useState(false);
    
    const Midref = useRef(null);
    const AvatarRef = useRef(null)

    // close input when click outside of Component
    document.addEventListener("click", e => {
        if(Midref.current && !Midref.current.contains(e.target)) {
            setInputStatus(false)
        }
    });

  return (
    <Wrapper>
        
        <Content>
            <LeftWrapper>
                <img src='images/logo.svg' />
            </LeftWrapper>

            <MidWrapper ref={Midref} open={inputStatus}>
                <div className='search'  onClick={() => setInputStatus(true)}>
                    <img className='searchIcon' src='images/search.svg' />
                    <input className='searchInput' placeholder='Search Facebook' />
                </div>
            </MidWrapper>

            <RightWrapper open={inputStatus}>
                <button className='btn'>
                    <img src='images/messenger.svg' />
                </button>

                <button className='btn'>
                    <img src='images/notification.svg' />
                </button>

                <CustomeAvatar ref={AvatarRef} onClick={() => setDropDownStatus(true)}>
                <Avatar className='avatar' src="https://scontent.fisu10-2.fna.fbcdn.net/v/t39.30808-1/329520680_744463466953340_6607526300212552205_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=109&ccb=1-7&_nc_sid=f67be1&_nc_ohc=0-LmeHlySNIAX8fYgTT&_nc_ht=scontent.fisu10-2.fna&oh=00_AfDZiyf8wZxb-DHwrZc9baB2lVXQ3Fw3SEr26U6TkXWksg&oe=6417CC3A" />
                <img className='down-arrow' src='images/down-arrow.svg' />
                </CustomeAvatar>
                
            </RightWrapper>
        </Content>
        <DropDown 
        dropDownStatus={dropDownStatus} 
        AvatarRef={AvatarRef} 
        setDropDownStatus={setDropDownStatus} 
        />
    </Wrapper>
  )
}

export default Header 