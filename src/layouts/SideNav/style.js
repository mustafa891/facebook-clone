import styled from "styled-components"

export const SideBar = styled.div`
position: fixed;
width: 300px;
top: 57px; // 57px
padding-top: 10px;
left: 0;
bottom: 0;

@media(max-width: 1131px) {
    background: white;
    width: 59px;
}
` 
export const topSide = styled.div`
 padding-bottom: 7px;
 margin-bottom: 7px;
 border-bottom : solid rgba(0,0,0,0.1) 1px;
`
export const midSide = styled.div`
padding-bottom: 7px;
margin-bottom: 7px;
border-bottom : solid rgba(0,0,0,0.1) 1px;
`
export const bottomSide = styled.div``