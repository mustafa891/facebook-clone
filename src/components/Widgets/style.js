import styled from "styled-components"

export const Widgets = styled.div`
width: 300px;


@media(max-width: 920px) {
    display: none;
}

`

export const Wrapper = styled.div`
position: fixed;
width: 300px;
.btn {
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    margin-right: 4px;
    cursor: pointer;
    display: flex;
    height: 36px;
    width: 36px;
    color: #65676B;

    &:hover {
        background: #8080801c;
    }
}

`

export const Top = styled.div`

.top__header {
    display: flex;
    color: #050505;
    align-items: center;
    justify-content: space-between;
}

.top__bottom {
    padding: 7px;
    display: flex;
    border-radius: 4px;
    align-items: center;

    &:hover {
        background: #8080801c; 
    }

    h4 {
        margin-left: 10px;
        font-weight: 500;
    }
}


`
export const Bottom = styled.div`

.bottom__header{
    display: flex;
    margin-top: 10px;
    align-items: center;
    justify-content: space-between;

    h4 {
        flex: 1;
        font-weight: 500;
    }

    .buttons {
        display: flex;
    }
}
`