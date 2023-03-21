import styled from "styled-components";

export const Container = styled.div`
width: 440px;
background: white;
border-radius: 6px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`
export const Wrapper = styled.div`
`
export const Header = styled.div`
padding: 13px 0;
text-align: center;
border-bottom: solid rgba(0,0,0,0.1) 1px;

h2 {
  font-family: Helvetica, Arial, sans-serif; 
}

div {
    margin-top: 5px;
    font-size: 14px;
    color: #606770;
    font-family: SFProText-Regular, Helvetica, Arial, sans-serif; 
}

`
export const Body = styled.div`
padding: 15px ;

span {
  display: block;
  margin: 10px 0;
  font-size: 14px;
  color: rgb(96, 103, 112);
}

p {
  color: rgb(96, 103, 112);
  margin: 14px 0;
  font-size: 11px;
}
`
export const Form = styled.form``
export const InputGroup = styled.div`
flex: 1;
display: flex;
margin-bottom: 13px;
justify-content: space-between;

select {
 flex: 1;
 height: 40px;
 border: none;
 outline: none;
 margin: 0 7px;
 border-radius: 4px;
 font-weight: 500;
 font-family: Helvetica, Arial, sans-serif; 
 box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
 text-transform: capitalize;
 padding: 0 4px;
}

.input {
 flex: 1;
 height: 40px;
 outline: none;
 border: none;
 border-radius: 6px;
 background: transparent;
 font-size: 16px;
 padding: 0 9px;
 font-weight: 500;
 font-family: Helvetica, Arial, sans-serif; 
 box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}

.radio__input {
   flex: 1;
   height: 40px;
   display: flex;
   margin: 0 9px;
   padding: 0 5px;
   font-weight: 500;
   border-radius: 5px;
   align-items: center;
   justify-content: space-between;
   font-family: Helvetica, Arial, sans-serif; 
   box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;  
}
`


export const ButtonWrapper = styled.div`
display: flex;
justify-content: center;
button {
  border: none;
  color: white; 
  font-size: 15px;
  cursor: pointer;
  font-weight: 500;
  padding: 10px 30px;
  border-radius: 3px;
  background: #00a400;
}
`