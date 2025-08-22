import styled from 'styled-components';

// Styled Components
export const FormContainer = styled.div`
  width: 300px;
  margin: auto;

`;

export const FormControl = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  position: relative;

  .required{
    color: red;
  }

  .error-msg {
    position: absolute;
    top: 100%;
    left: 104px;
    font-size: x-small;

  }

  @media screen and (max-width: 600px) {
    display: block;
  }
`;

export const Label = styled.label`
  display: flex;
  margin-bottom: 5px;
  font-weight: bold;
  padding-right: 10px;
  width: 150px
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

export const RadioGroup = styled.div`
  display: flex;
`;

export const RadioButton = styled.label`
  margin-right: 10px;
`;

// Form Component


// Example Usage
// const App = () => {
//   const formFields = [
//     { type: 'text', label: 'Name', placeholder: 'Enter your name' },
//     {
//       type: 'dropdown',
//       label: 'Select Country',
//       options: [
//         { value: 'us', label: 'United States' },
//         { value: 'ca', label: 'Canada' },
//         { value: 'uk', label: 'United Kingdom' },
//       ],
//     },
//     {
//       type: 'radio',
//       label: 'Gender',
//       name: 'gender',
//       options: [
//         { value: 'male', label: 'Male' },
//         { value: 'female', label: 'Female' },
//         { value: 'other', label: 'Other' },
//       ],
//     },
//   ];

//   return (
//     <div>
//       <h1>Dynamic Form Example</h1>
//       <DynamicForm formFields={formFields} />
//     </div>
//   );
// };

// export default App;
