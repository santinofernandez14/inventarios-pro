import { NavLink } from "react-router-dom";
import styled from "styled-components";

export function ReportesTemplate() {
 
  
  return (
    <Container>
      <Sidebar>
          <SidebarSection>
            <SidebarTitle>Stock Actual</SidebarTitle>
            <SidebarItem to="stock-actual-por-producto">Por producto</SidebarItem>
            <SidebarItem to="stock-actual-todos">Todos</SidebarItem>
            <SidebarItem to="stock-bajo-minimo">Bajo del minimo</SidebarItem>
          </SidebarSection>

        </Sidebar>
    </Container>
  );
}
const Container = styled.div`
  min-height: 100vh;
  padding: 15px;
  width: 100%;
  color: ${({theme}) => theme.text};

`;

const Sidebar = styled.div `
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 768px){
    width: 250px;
    order: 2;
  
  }


`

const SidebarSection = styled.div `

  margin-bottom: 20px;
  border-radius: 10px;
  border: 2px solid ${({theme}) => theme.color2};
  padding: 12px;


`

const SidebarTitle = styled.h3 `
  margin-bottom: 20px;
  font-size: 1.2em;


`

const SidebarItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 12px;
  cursor: pointer;
  margin: 5px 0;
  padding: 0 5%;
  text-decoration: none;
  color: ${(props) => props.theme.text};
  height: 60px;
  &: hover {
    color: ${(props) => props.theme.colorSubtitle}
  }


`