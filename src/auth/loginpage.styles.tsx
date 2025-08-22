
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #6a11cb, #2575fc);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormWrapper = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  width: 300px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 24px;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #2575fc;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #1a5edb;
  }
`;

export const MainContainer = styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;


export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 64px;
    font-weight: bolder;
    align-items: center;
    justify-content: center;
`;

// .mainContainer {
//     flex - direction: column;
//     display: flex;
//     align - items: center;
//     justify - content: center;
//     height: 100vh;
// }

// .titleContainer {
//     display: flex;
//     flex - direction: column;
//     font - size: 64px;
//     font - weight: bolder;
//     align - items: center;
//     justify - content: center;
// }

// .resultContainer, .historyItem {
//     flex - direction: row;
//     display: flex;
//     width: 400px;
//     align - items: center;
//     justify - content: space - between;
// }

// .historyContainer {
//     flex - direction: column;
//     display: flex;
//     height: 200px;
//     align - items: center;
//     flex - grow: 5;
//     justify - content: flex - start;
// }

// .buttonContainer {
//     display: flex;
//     flex - direction: column;
//     align - items: center;
//     justify - content: center;
//     height: 260px;
// }

// .inputContainer {
//     display: flex;
//     flex - direction: column;
//     align - items: flex - start;
//     justify - content: center;
// }

// .inputContainer > .errorLabel {
//     color: red;
//     font - size: 12px;
// }

// .inputBox {
//     height: 48px;
//     width: 400px;
//     font - size: large;
//     border - radius: 8px;
//     border: 1px solid grey;
//     padding - left: 8px;
