import styled from "styled-components"

export const Wrapper = styled.div`
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; border-radius: 10px;
 position: absolute;
 background: white;
 display: ${props => props.dropDownStatus ? "block" : "none"};
 padding: 13px;
 width: 340px;
 right: 10px;
 top: 56px;

 .dropdown__header {
    margin: 5px;
    padding: 5px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

    .profile {
      display: flex;
      border-radius: 10px;
      align-items: center;
      padding: 10px 8px;
      cursor: pointer;
      transition: background 0.3s;
      margin-bottom: 5px;


      &:hover {
         background:  rgb(228 230 235 / 67%);
      }

      p {
         font-weight: 500;
         margin-left: 8px;
         font-size: 17px;
      }
    }

    hr {
      border-top: solid #ced0d4 1px;
     }

 }

 .dropdown__body {
   margin-top: 15px;
 }

 .dropdown__footer {
  
   display: flex;
   flex-wrap: wrap;
   font-size: 13px;
   a {
      margin: 0 4px;
      color: rgb(110 108 108);
      text-decoration: none;

      &:hover {
         text-decoration: underline;
      }
   }
   
 }

`

export const Button = styled.div`

padding: 8px;
display: block;
margin-top: 5px;
cursor: pointer;
font-weight: 500;
border-radius: 10px;
color: hsl(214 89% 52% / 1);

&:hover {
   background:  rgb(228 230 235 / 67%);
}
`


export const Item = styled.div`
display: flex;
padding: 8px 5px;
border-radius: 4px;
justify-content: space-between;
align-items: center;
cursor: pointer;
transition: background 0.2s;

p {
   font-size: 15px;
   color: #050505;
   font-weight: 500;
}


.MuiSvgIcon-root{
 color: #979BA1;
 font-size: 20px;
}

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
}

&:hover {

   .icon {
      background: rgb(217 219 224);
   }

   background: rgb(228 230 235 / 67%);
}
`