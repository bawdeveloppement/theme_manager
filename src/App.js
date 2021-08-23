import { ThemeManager } from './components/ThemeManager';
import { ThemeContextProvider } from './contexts/ThemeContext';
import MainPage from './pages';

const App = () => (
  <ThemeContextProvider>
      <div style={{ height: "100%", display: "flex" }}>
        <ThemeManager />
        <MainPage />
      </div>
  </ThemeContextProvider>
);

export default App;