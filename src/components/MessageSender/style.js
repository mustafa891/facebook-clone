import styled from "styled-components"

export const Wrapper = styled.div`
padding: 13px;
margin-top: 15px;
border-radius: 6px;
background: white;
box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

` 

export const Top = styled.div`
display: flex;
border-bottom: solid rgba(0,0,0,0.2) 1px;
padding-bottom: 15px;
margin-bottom: 15px;

.Avatar{
 margin-right: 10px;
}

form {
  flex: 1;
  display: flex;
}

`
export const MessageInput = styled.input`
background: #f0f2f5;
border-radius: 20px;
padding: 0 10px;
font-weight: 400;
font-size: 15px;
letter-spacing: 0.8px;
outline: none;
border: none;
flex: 1;

`

export const Bottom = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
export const Button = styled.div`
display: flex;
padding: 9px;
align-items: center;
border-radius: 6px;

&:hover {
    background: #efefef;
}

span {
    font-weight: 500;
    color: gray
}

img {
    width: 24px;
    height: 24px;
    margin-right: 5px;
}

`