import { NavbarWrapper, NavItem, NavList, NavLink } from '../styles/navbar.ts';
import { useState, useEffect } from 'react';
import { ThemeToggle } from './switch.tsx';
import { lightTheme, darkTheme } from '../styles/theme.ts';

interface NavbarProps {
  isVisible?: boolean;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  theme: { 
    background: string;
    text: string;
  };
}

export function Navbar(props: NavbarProps) {
  const [isVisible, setIsVisible] = useState(window.innerWidth > 1110);
  const [darkMode, setDarkMode] = useState(props.darkMode);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    props.onToggleDarkMode();
  }

  const selectedTheme = darkMode ? darkTheme : lightTheme;

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth > 1110);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <NavbarWrapper isVisible={isVisible} darkMode={darkMode} onToggleDarkMode={toggleTheme} theme={selectedTheme}>
        <NavList>
          <NavItem>
            <NavLink to="/home">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/cursos">Cursos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/experiencias">Experiências</NavLink>
          </NavItem>
        </NavList>
        <ThemeToggle darkMode={props.darkMode} onToggleDarkMode={toggleTheme} />
      </NavbarWrapper>

    </>
  );
}