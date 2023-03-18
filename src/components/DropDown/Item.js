import React from 'react'
import styled from 'styled-components';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Item({title, Icon, }) {
  return (
    <Wrapper>
        <div className='main'>
          <div className="icon">
              <Icon />
           </div>
           <p>{title}</p>
        </div>
     <ArrowForwardIosIcon />
    </Wrapper>

  )
}


export const Wrapper = styled.div`
display: flex;
padding: 8px 5px;
border-radius: 4px;
justify-content: space-between;
align-items: center;
cursor: pointer;
transition: background 0.2s;

.main {
    display: flex;
    align-items: center;
 
    .MuiSvgIcon-root{
       color: #000000d4;
       font-size: 23px;
    
    }
 
    .icon {
       justify-content: center;
       align-items: center;
       background: #e4e6eb;    
       border-radius: 17px;
       margin-right: 10px;
       display: flex;
       height: 36px;
       width: 36px;
    }

    p {
        font-size: 15px;
        color: #050505;
        font-weight: 500;
     }
     
 }


.MuiSvgIcon-root{
 color: #979BA1;
 font-size: 20px;
}

&:hover {
   .icon {
      background: rgb(217 219 224);
   }
   background: rgb(228 230 235 / 67%);
}
`