import styled from "styled-components";



export const KpisBox= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    gap:20px;

`;

export const KpisContainer= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    padding: 20px;
    width: 340px;
    min-width: 250px;
    border-radius: 12px;
    background:  #FFFFFF;
    box-shadow: 0px 4px 4px #00000005;

    .icon{
        width: 65px;
        height: 65px;
        background-color: #FFEDEC;
        border-radius: 8px; 
        color:red; 
        padding: 20px;
        gap: 15px;
        margin-right:10px;
        &:hover{
            background: #E23428;
            color:white;
        }
    }

`;

export const KpisNumber= styled.h1`
    font-size: 30px;
    font-weight: 600;
    color:#393939;
    text-align: left;
    span{
        display: block;
        font-size: 14px;
        font-weight: 300;
        color:#787878;
        text-align: left;
    }

`
