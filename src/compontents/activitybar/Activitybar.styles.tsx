import styled from "styled-components";

export const TopBar = styled.div`
    background-color: ${(props) => props.theme.background};
    height: 40px;
    width: 100%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .filter-items{
      display: flex;
    }
`;

export const FilterIcon = styled.div`
  /* Add styles for the filter icon */
  width: 20px;
  height: 20px;
  background-image: url('path/to/your/filter-icon.svg');
  background-size: cover;
  margin-right: 10px; /* Adjust margin as needed */
  cursor: pointer;
`;

export const Button = styled.button`
    background-color: ${(props) => props.theme.buttonBackground};
    color: ${(props) => props.theme.color};
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.color};
    cursor: pointer;
    margin-right: 5px;
    width: fit-content;
    height: 30px;
`;