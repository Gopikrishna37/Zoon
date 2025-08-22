// #overlay {
//     position: fixed; /* Sit on top of the page content */
//     display: none; /* Hidden by default */
//     width: 100%; /* Full width (cover the whole page) */
//     height: 100%; /* Full height (cover the whole page) */
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-color: rgba(0,0,0,0.5); /* Black background with opacity */
//     z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
//     cursor: pointer; /* Add a pointer on hover */
//   }

import styled from "styled-components";


interface AddUserDivModel {
	theme: {
		popcontainer: string;
	};
}

export const AddUserDiv = styled.div<AddUserDivModel>`
    position: fixed;
    display: block;
    opacity: 95%;
    width: 100%;
    height: 100%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    background-color: rgba(22,22,22,0.9);
    z-index: 5;
    cursor: pointer;

    .close{
        position: absolute;
        right: 10px;
        top: 10px;
        color: white;
        background-color: black;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        text-align: center;
        opacity: 100%;
    }

    .reveal-modal {
        background: ${(props) => props.theme.popcontainer};
        margin: 0 auto;
        width:80%;
        position:relative;
        z-index:100;
        top: 15%;
        padding:30px;
        opacity: 100%;
        box-shadow:0 0 10px rgba(0,0,0,0.4);
        scroll: none;
    }
`;