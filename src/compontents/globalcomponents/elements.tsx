import styled, { keyframes } from "styled-components";

export const CloseIcon = styled.div`
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
    font-size: medium;
    cursor: pointer;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  border: 5px solid silver;
  border-radius: 50%;
  border-top: 5px solid black;
  width: 50px;
  height: 50px;
  animation: ${spin} 2s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;

  @media screen and (max-width: 600px) {
	width: 25px;
	height: 25px;
  }
`;
