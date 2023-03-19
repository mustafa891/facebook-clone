import styled from "styled-components"


export const Post = styled.div`
width: 500px;
margin-top: 20px;
background: white;
border-radius: 6px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

`
export const PostHeader = styled.div`
display: flex;
padding: 10px 15px;
justify-content: space-between;

.info  {
 display: flex;

 div {
    margin-right: 10px;

    span {
        font-weight: 500;
        cursor: pointer;
        &:hover{
            text-decoration: underline;
        }
    }

    p {
        color: gray;
        font-size: 12px;
    }
  }
}


.buttons {
    .btn {
        justify-content: center;
        align-items: center;
        border-radius: 18px;
        margin-right: 4px;
        cursor: pointer;
        display: flex;
        height: 36px;
        width: 36px;
        
        .MuiSvgIcon-root {
          color: #65676B;
        }

        &:hover {
            background: #8080801c;
        }
    }
 }

.buttons {
    display: flex;
}
`
export const PostBody = styled.div`
 .post__text {
    direction: rtl;
    padding-right:  12px; 
    padding-bottom:  12px;
    
    p{
      width: 100%;
    }
 } 

 .post__image  {
     width: 500px;
     height: 100%;
    img{
        width: 100%;    
        height: 100%;
        object-fit: contain;
    }
 }

`
export const PostFooter = styled.div`
margin: 6px;
display: flex;
border-radius: 6px;
justify-content: space-between;
`
export const Button = styled.div`
flex: 1;
display: flex;
padding: 10px;
cursor: pointer;
align-items: center;
justify-content: center;
color: #606770;

.MuiSvgIcon-root {
 margin-right: 4px;
}

&:hover {
    background: #efefef;
}
`