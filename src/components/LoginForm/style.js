import styled from "styled-components"

export const Container = styled.div`
width: 398px;
background: white;
border-radius: 7px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`
export const Wrapper = styled.div`
padding: 4px 20px ;
text-align: center;

h4 {
    color: #1c1e21;
    margin: 20px 0;
    font-weight: 500;
    font-size: 18px;
}

`
export const CustomeForm = styled.form`
flex-direction: column;
flex: 1;
display: flex;

button {
  border: none;
  height: 48px;
  color: white;
  cursor: pointer;
  font-size: 19px;
  font-weight: bold;
  border-radius: 5px;
  background: #1877f2;
  font-family: Helvetica, Arial, sans-serif; 
}

.links {
    margin: 20px 0;

    a {
        color: #1877f2;
        margin-right: 10px;
        text-decoration: none;
        font-size: 14px !important;

        &:hover {
            text-decoration: underline;
        }
    }
}

`
export const InputGroup = styled.div`
flex: 1;
display: flex;
margin-bottom: 13px;

input {
 flex: 1;
 height: 52px;
 outline: none;
 border: none;
 border-radius: 6px;
 background: transparent;
 font-size: 16px;
 padding: 0 13px;
 font-weight: 500;
 font-family: Helvetica, Arial, sans-serif; 
 box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}
`