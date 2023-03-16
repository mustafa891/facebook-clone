import styled from "styled-components";

export const Wrapper = styled.div`
height: 56px;
padding: 0 1rem;
background: white;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

`
export const Content = styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: space-between; 
`
export const LeftWrapper = styled.div`` 
export const MidWrapper = styled.div`

@media(max-width: 900px) {
flex: 1;
justify-content: flex-start;
}

.search {
 background: #f0f2f5;
 border-radius: 20px;
 width: 500px;
 height: 40px; 
 display: flex;

 @media(max-width: 900px) {
     cursor: pointer;
     margin-left: 20px;

     width: ${props => props.open ? "unset" : "40px"};
 }


 .searchInput {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: 400;
    padding-left: 12px;
    background: transparent;
}

 .searchIcon{
    width:16px;
    padding-left: 12px;
 }
}`

export const RightWrapper = styled.div`

gap:0 7px;
display: flex;
justify-content: flex-end;

@media(max-width: 550px) {
 display: ${props => props.open ? "none" : "flex"};
}

.btn {
    width: 40px;
    height: 40px;
    border: none;
    cursor: pointer;
    background: #e4e6eb;
    border-radius: 20px;
    transition: background 0.2s ease;
    &:hover {
        background: rgb(217 219 224);
    }
}

`

export const CustomeAvatar = styled.div`
position: relative;
cursor: pointer;

.down-arrow {
    border: solid white 2px;
    background: #e4e6eb;
    position: absolute;
    border-radius: 7px;
    bottom: -3px;
    width: 12px;
    left: 28px;
}

` 