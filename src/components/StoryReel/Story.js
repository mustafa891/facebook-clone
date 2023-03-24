import { Avatar } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

export default function Story({profileSrc, name, bg}) {
  return (
    <Wrapper bg={bg}>
     <Overley />
      <Avatar className='Avatar' src={profileSrc} />
      <p>{name}</p>
   </Wrapper>
  )
}


const Wrapper = styled.div`
position: relative;
height: 200px;
width: 112px;
display: flex;
margin: 0 4px;
cursor: pointer;
border-radius: 12px;
flex-direction: column;
justify-content: space-between;
background: ${props => `url(${props.bg})`};
background-position: center;
background-size: 100%;

.Avatar {
  border: solid #1876F2 4px;
  margin-left: 10px;
  margin-top: 10px;
  width: 30px; 
  height: 30px;
}

p {
  margin-left : 10px;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 14px;
  color: white;
  z-index: 10;
}
`

const Overley = styled.div`
z-index:2;
width: 100%;
height: 100%;
position:absolute;
border-radius: 12px;
background-image: linear-gradient(0deg,rgba(0,0,0,0.4),transparent);

&:hover {
  background-image: linear-gradient(0deg,rgba(0,0,0,0.4),rgba(0,0,0,0.1));  
}

` 