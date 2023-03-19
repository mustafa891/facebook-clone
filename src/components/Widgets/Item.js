import styled from "styled-components"

export default function Item  ({Icon, title, imgSrc, profileSrc,IconButton, active})  {
    return <Wrapper >
    {active && <BorderLeft />}
     
     {Icon &&
      <IconWrapper className={IconButton ? "iconBtn" : ""}>
      <Icon src={profileSrc && profileSrc} />
      </IconWrapper>
     }
     
     {imgSrc && 
     <img src={imgSrc} />
     }
     <span>{title}</span>
    </Wrapper> 
}




const Wrapper = styled.div`
display: flex;
align-items: center;
margin-right: 5px; 
padding: 10px;
border-radius: 6px;
cursor: pointer;

.MuiAvatar-circular  {
 width: 24px;
 height: 24px;
}

span {
    font-size: 14px;
    font-weight: 500;
    margin-left: 10px;
}

&:hover {
    background: rgb(0 0 0 / 4%);
}

img{
    width: 24px;
    height: 24px;
}

.iconBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    background: rgba(0,0,0,0.1);
    height: 30px;
    width: 30px;
}

.iconBtn  .MuiSvgIcon-root{
    height: 22px; 
    width: 22px;
    color: #222 !important;
}

`

const BorderLeft = styled.div`
position: absolute;
background: #056BE1;
height: 36px;
width: 4px;
left: 0;

border-bottom-right-radius: 8px;
border-top-right-radius: 8px;

`

const IconWrapper = styled.div`
height: 22px; 
width: 22px;

.MuiSvgIcon-root  {
    color: #056BE1;
}
`