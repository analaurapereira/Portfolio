import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/theme';
import { RouteComponent } from './routes';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollButton } from './components/flecha';
import { Sidebar} from './components/SideBar';
import { useState } from 'react';

export function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const selectedTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <BrowserRouter>
          <Sidebar
            isOpen={true}
            darkMode={isDarkMode}
            onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
            theme={selectedTheme}
          />
        <Navbar
          isVisible={true}
          darkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
          theme={selectedTheme}
        />
        <RouteComponent />
        <ScrollButton />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
