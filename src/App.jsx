import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { AuthContextProvider } from "./context/AuthContext"
import { MyRoutes } from './routers/routes'
import styled, { ThemeProvider } from 'styled-components'
import { createContext } from 'react'
import { Light, Dark } from "./styles/themes"
import { Device } from "./styles/breackpoints"
import { Sidebar } from "./components/organismos/sidebar/Sidebar"
import { MenuHambur } from './components/organismos/MenuHambur'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useLocation } from 'react-router-dom'
import { Login } from './pages/Login'

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
            <MyRoutes/>
            {/*pathname == "/login" ? (
              <Login />
            ) : (
              <Container className={sidebarOpen ? "active" : ""}>
                <section className="ContentSidebar">
                  <Sidebar
                    state={sidebarOpen}
                    setState={() => setSidebarOpen(!sidebarOpen)}
                  />
                </section>
                <section className="ContentMenuambur">
                  <MenuHambur />
                </section>
                <section className="ContentRoutes">
                  <MyRoutes />
                </section>
              </Container>
            )*/}

            <ReactQueryDevtools initialIsOpen={false} />
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}


export default App;