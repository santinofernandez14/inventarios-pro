import { useState } from 'react'
import { AuthContextProvider } from "./context/AuthContext"
import { MyRoutes } from './routers/routes'
import { ThemeProvider } from 'styled-components'
import { createContext } from 'react'
import { Light, Dark } from "./styles/themes"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useLocation } from 'react-router-dom'

export const ThemeContext = createContext(null);

function App() {
  const [themeuse, setTheme] = useState("dark");
  const theme = themeuse === "light" ? "light" : "dark";
  const themeStyle = theme === "light" ? Light : Dark;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();
  
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={themeStyle}>
          <AuthContextProvider>
            <MyRoutes />
            <ReactQueryDevtools initialIsOpen={false} />
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}
export default App;