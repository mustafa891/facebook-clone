import React, { useRef, useState } from 'react'
import * as S from './style'
import { Avatar } from '@mui/material'
import {DropDown} from '../../components/';
import { useAuth } from '../../context/UserContext';

function Header() {

    const {user} = useAuth()

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
    <S.Wrapper>
        
        <S.Content>
            <S.LeftWrapper>
                <img src='images/logo.svg' />
            </S.LeftWrapper>

            <S.MidWrapper ref={Midref} open={inputStatus}>
                <div className='search'  onClick={() => setInputStatus(true)}>
                    <img className='searchIcon' src='images/search.svg' />
                    <input className='searchInput' placeholder='Search Facebook' />
                </div>
            </S.MidWrapper>

            <S.RightWrapper open={inputStatus}>
                <button className='btn'>
                    <img src='images/messenger.svg' />
                </button>

                <button className='btn'>
                    <img src='images/notification.svg' />
                </button>

                <S.CustomeAvatar ref={AvatarRef} onClick={() => setDropDownStatus(true)}>
                <Avatar className='avatar' src={user.photoURL}  />
                <img className='down-arrow' src='images/down-arrow.svg' />
                </S.CustomeAvatar>
                
            </S.RightWrapper>
        
        </S.Content>

        <DropDown 
        dropDownStatus={dropDownStatus} 
        AvatarRef={AvatarRef} 
        setDropDownStatus={setDropDownStatus} 
        />

    </S.Wrapper>
  )
}

export default Header;