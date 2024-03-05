
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'; 
import { lightTheme} from '../styles/theme';

interface ThemeToggleProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, onToggleDarkMode }) => {
  const icon = darkMode ? faSun : faMoon;
  return (
    <button
      style={{
        color: 'black',
        marginLeft:'10%',
        width: '90px',
        cursor: 'pointer',
        border: 'none',
        left: '95.2%',
        backgroundColor: 'rgb(0, 19, 35)'
      }}
      onClick={onToggleDarkMode}
    >
      <FontAwesomeIcon
        icon={icon}
        color={lightTheme.background}
        size="2x"
      />
    </button>
  );
};