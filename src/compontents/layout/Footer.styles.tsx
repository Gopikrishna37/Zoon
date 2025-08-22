import React,{ HTMLAttributes } from 'react';

import styled from 'styled-components';

interface ThemeProps extends HTMLAttributes<HTMLDivElement>{
  header: string;
  text: string;
}

export const FooterStyle = styled.div<React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,ThemeProps>`
  background-color: ${(props) => props.theme.header};
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: ${(props) => props.theme.text};
  text-align: center;
  height: 7%;
  border-top: 1px solid white;
`;