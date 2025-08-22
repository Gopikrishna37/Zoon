import styled from 'styled-components';
import { HTMLAttributes } from 'react';

// Styled components for the header
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.header};
  padding: 5px 10px;
  border-bottom: 1px solid white;
`;

export const CompanyHeading = styled.h1`
  margin: 0;
  color: ${(props) => props.theme.text};
`;

interface MenuWrapperProps extends HTMLAttributes<HTMLDivElement> {
  showMenu: boolean;
}

interface ThemeProps extends HTMLAttributes<HTMLDivElement> {
  header: string;
  text: string;
  iconColor: string;
}

export const MenuWrapper = styled.div<MenuWrapperProps>`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  a{
    text-decoration: none;
    color: ${(props) => props.theme.text};
  }

  @media screen and (max-width: 600px) {
    display: ${(props) => (props.showMenu ? 'block' : 'none')};
    position: absolute;
    left: 0px;
    top: 60px;
    background-color: ${(props) => props.theme.header};
    width: 100%;
    align-items: flex-start;
    justify-content: start;
  }
`;

export const MenuWrapperMobile = styled(MenuWrapper)`
@media screen and (max-width: 600px) {
    display: none;
    position: absolute;
    left: 0px;
    top: 60px;
    background-color: ${(props) => props.theme.header};
    width: 100%;
    align-items: flex-start;
    justify-content: start;
  }
`;


export const MenuLink = styled.div<React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ThemeProps>`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  padding: 12px;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.header};
  &:hover {
    background-color: #ddd;
  }

  @media screen and (max-width: 600px) {
      background-color: ${(props) => props.theme.header};
    display: block; // Show icons only in mobile view
  }

`;

export const MenuLinkCart = styled.div<React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ThemeProps>`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  padding: 12px;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;

  .cartnotify{
    display: block;
    position: relative;
  }

  .numofitems{
    color: #000;
    display: block;
    position: absolute;
    left: 25px;
    top: 0px;
    background-color: red;
    width: 15px;
    height: 15px;
    align-content: center;
    border-radius: 50%;
    line-height: 1;
    align-items: center;
    text-align: center;
    font-size: small;
  }

  &:hover {
    background-color: #ddd;
  }

  div{
    text-decoration: none;
    color: ${(props) => props.theme.text};
  }

  @media screen and (max-width: 600px) {
    display: none; // Show icons only in mobile view
  }

`;

export const MenuLinkName = styled.div<React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ThemeProps>`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  padding: 12px;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
  display: none;
  &:hover {
    background-color: #ddd;
  }

  a{
    text-decoration: none;
    color: ${(props) => props.theme.text};
  }

  @media screen and (max-width: 600px) {
    display: block; // Show icons only in mobile view
  }

`;

export const MenuIcon = styled.span<React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ThemeProps>`
  font-size: 24px;
  margin-right: 15px;
  color: ${(props) => props.theme.iconColor};
  display: none;

  @media screen and (max-width: 600px) {
    display: inline; // Show icons only in mobile view
  }
`;

export const DarkThemeButton = styled.div`
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
