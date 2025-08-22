import styled from "styled-components";

export const Pagination = styled.div`

    text-align: center;
    padding: 1%;

    .pagination {
        display: inline-block;
    }

  .pagination div {
    color: ${(props) => props.theme.text};
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color .3s;
    border: 1px solid #ddd;
    margin: 0 4px;
    cursor: pointer;
  }

  .pagination div.active {
    background-color: #4CAF50;
    color: white;
    border: 1px solid #4CAF50;
    cursor: pointer;
  }

  .pagination a:hover:not(.active) {background-color: #ddd;}
`;