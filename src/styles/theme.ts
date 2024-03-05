import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
  }
`;

export const lightTheme = {
  background: '#efefefff',
  text: '#262626',
  button: '#999999ff',
};

export const darkTheme = {
  background: '#272727ff',
  text: 'whitesmoke',
  button: 'whitesmoke',
};