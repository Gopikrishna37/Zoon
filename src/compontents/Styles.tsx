import styled, { createGlobalStyle } from 'styled-components';
import px2vw from "../utilities/stylehelper";

// Define light and dark themes
export const lightTheme = {
	background: '#f1f1f1',
	text: '#000',
	buttonBackground: '#C0C0C0',
	buttonColor: '#fff',
	iconColor: '#000',
	header: '#C0C0C0',
	popcontainer: "white", // Color for icons in light mode
	productbox: "white"
};

export const darkTheme = {
	background: '#111', // Darker background color for dark mode
	text: '#fff',
	buttonBackground: '#f1f1f1',
	buttonColor: '#000',
	iconColor: '#fff',
	header: '',
	popcontainer: "#C0C0C0",
	productbox: "#C0C0C0"
	// Color for icons in dark mode
};

// Global styles for the entire app
export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    transition: background-color 0.3s, color 0.3s;
  }

  *:root {
    font-size: ${px2vw(24)};

    @media (min-width: 768px) {
      font-size: ${px2vw(18)};
    }

    @media (min-width: 1024px) {
      font-size: ${px2vw(16)};
    }
  }
`;




export const HomePage = styled.div`
  fonst-size: 24px;
  align-items: center;
  justify-content: center;
`;