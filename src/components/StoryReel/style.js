import styled from "styled-components"


export const Wrapper = styled.div`
box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
background: white;
border-radius: 6px;
width: 500px;

`

export const Tabs = styled.div`
.active{
 border-bottom: solid #1876F2 3px;
 border-radius: 0px;
 &:hover{
    background: white;
 }

}
border-bottom: solid rgba(0,0,0,0.1) 1px;
`

export const TabContent = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 5px 7px;

`

export const Tab = styled.div`
display: flex;
flex: 1;
margin: auto;
height: 60px;
margin: 0 3px;
cursor: pointer;
border-radius: 6px;
text-align: center;
align-items: center;
justify-content: center;

&:hover {
    background: #efefef;
}

img {
    margin: 0 10px;
    width: 19px;
}

p {
    font-weight: 500;
}
`
export const Storys = styled.div`
padding: 10px;
`

export const StorysContent = styled.div`
display: flex;
justify-content: center;
`