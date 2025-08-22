import styled from "styled-components";

export const UsersListBox = styled.div`
    display: grid;
    width: 100%;
    .item1 {
        grid-column: 1 / span 3;
        grid-row: 1;
      }

      .item2 {
        grid-column: auto/ span 3;
        grid-row: 2;
        height: 425px;
      }

      .item3 {
        grid-column: 1 / span 3;
        grid-row: 3;
      }

      .middlecontainer{
        display: flex;
        width: 100%;
        height: 100%;
      }

      .mobilefilter{
        display:none;
      }

      .userlist-tb{
        width: 100%;
        height: auto;
        padding: 10px;
      }

      .filter{
        padding: 10px;
      }

      @media screen and (max-width: 600px) {
        .filter{
          display: none !important;
        }

        .mobilefilter{
          background-color: silver;
          display: block !important;
          position: absolute;
          width: 100%;
          height: 100%;
          scroll: hidden;
        }
      }
`;