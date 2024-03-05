import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface NavbarWrapperProps {
  isVisible?: boolean;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  theme: { // Adjust the type accordingly
    background: string;
    text: string;
  };
}

export const NavbarWrapper = styled.div<NavbarWrapperProps>`
    display: ${(props) => (props.isVisible ? 'flex' : 'none')};
    justify-content: space-between;
    padding: 0.9em 5em;
    background: rgb(0, 19, 35);
    color: ${(props) => props.theme.text};
    font-family: 'Arial', sans-serif;
    margin: 0;
    width: 90.5%;
    height: 50px;
    z-index: 2;
`;


export const NavList = styled.ul`
    display:flex;
    list-style: none;
    align-items: center;
    margin: 0;
    padding: 0; 
`;

export const NavItem = styled.li`
    margin-right: 1em;
`;

export const NavLink = styled(Link)`
    color: whitesmoke;
    display: inline-block;
    text-decoration: none;
    font-size: 20px;
    padding: 0.8em 4em; 
    position: relative;
    overflow: hidden;
    background-color: transparent;
    border-radius: 30px;
    z-index: 1; 

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 30px;
        transform-origin: left center;
        background-color: #2196f3;
        transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        transform: scaleX(0); 
        z-index: -1; 
    }

    &:hover::before {
        transform: scaleX(1); 
        border-radius: 30px; 
    }

    &:hover {
        color: #212121;
        border-radius: 30px;
        transform: scale(1.1);
    }
`;