import styled from "styled-components";

export const FilterBox = styled.div`
    border: 2px solid silver;
    width: 200px;
    margin-botton: 10px;
    height: 100%;

    input{
        width: 180px;
    }

    div{
        div{
            display: grid;
            padding: 0px 10px;
        }
        div:nth-child(n+4):nth-child(-n+5){
            width: 80px;
            display: inline;
        }
    }

    h3{
        margin: 0%;
        padding: 2%
    }

    @media screen and (max-width: 600px) {
        width: 100%;
        height: 100%;
        margin: 0%

        input{
            width: auto;
        }

        div{
            div{
                display: grid;
                width: auto;
            }
        }


        h3{
            margin: 0%;
            padding: 2%
        }
    }
`;