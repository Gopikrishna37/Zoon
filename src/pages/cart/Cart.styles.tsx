import styled from "styled-components";

export const CartContainer=styled.div`
    margin: 5%;
    .cartitem{
        justify-content: start;
        display: flex;
        align-items: center;

    }

    .quantity{
        display: block;
        border: 1px solid silver;
        width: fit-content;
        margin-left: 5%;
        span{
            border: 1px solid silver;
            padding: 1%;
            cursor: pointer;
        }
    }

    .deleteicon{
        cursor: pointer;
    }
`;