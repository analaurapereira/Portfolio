import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ThemeToggle } from './switch.tsx';
import { lightTheme, darkTheme } from '../styles/theme.ts';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  theme: {
    background: string;
    text: string;
  };
}

const StyledSidebarWrapper = styled.div<SidebarProps>`
    height: 100%;
    width: ${(props) => (props.isOpen ? '250px' : '0')};
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgb(0, 19, 35);
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 80px;
    display:flex;
    flex-direction: line;
    z-index: 5;
`;

const SidebarContent = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    font-size: larger;
    line-height: 2.0; 
    border: rgb(0, 19, 35);
`;

const OpenButton = styled.span`
    font-size: 200%;
    cursor: pointer;
    position: fixed;
    margin-left: 15px;
    color: ${(props) => props.theme.button};
    margin-top: 1%;
    z-index:6;
`;

const StyledLink = styled(Link)`
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
`

const Style = styled.button`
    margin-left:14%;     
    background-color: rgb(0, 19, 35);
    border: rgb(0, 19, 35);
    color: rgb(0, 19, 35);
    justify-content: flex-end;
    margin-top: 210%;
    @media (min-height: 400px) {
        margin-top: 90%;
    }
`

export const Sidebar: React.FC<SidebarProps> = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        const storedDarkMode = localStorage.getItem('darkMode');
        return storedDarkMode ? JSON.parse(storedDarkMode) : props.darkMode;
    });
    const [icon, setIcon] = useState('☰'); // Initial icon
     const location = useLocation();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        setIcon(isOpen ? '☰' : '✕'); // Change icon when opening/closing
    };
    
    useEffect(() => {
        // Update the icon when the location changes (page change)
        setIcon('☰');
        setIsOpen(false);
    }, [location.pathname]);

    const toggleTheme = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
        props.onToggleDarkMode();
    };

    const selectedTheme = darkMode ? darkTheme : lightTheme;

    const handleResize = () => {
        setIsVisible(window.innerWidth <= 1110);

        if (window.innerWidth <= 1110 && isOpen) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

        return (
    <>
      {isVisible && <OpenButton onClick={toggleSidebar}>{icon}</OpenButton>}
      {isVisible && (
        <StyledSidebarWrapper
          isOpen={isOpen}
          darkMode={props.darkMode}
          onToggleDarkMode={props.onToggleDarkMode}
          theme={selectedTheme}
        >
          <SidebarContent>
            <StyledLink to=" ">Home</StyledLink>
            <StyledLink to="/cursos">Cursos</StyledLink>
            <StyledLink to="/experiencias">Experiências</StyledLink>
            <Style><ThemeToggle darkMode={darkMode} onToggleDarkMode={toggleTheme} /></Style>
          </SidebarContent>
        </StyledSidebarWrapper>
      )}
    </>
  );
};