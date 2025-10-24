import styled from "styled-components";
import { useState } from "react";
import { Btnfiltro } from "../moleculas/BtnFiltro";
import { Buscador } from "../organismos/Buscador";
import { ContentFiltro } from "../atomos/ContentFiltro";
import { Header } from "../organismos/Header";
import { Title } from "../atomos/Title";
import { useProductosStore } from "../../store/ProductosStore";
import { v } from "../../styles/variables";
import { RegistrarProductos } from "../organismos/formularios/RegistrarProductos";
import { TablaProductos } from "../organismos/tablas/TablaProductos";

export function ProductosTemplate({ data }) {
  const [state, setState] = useState(false);
  const [dataSelect, setDataSelect] = useState([]);
  const [accion, setAccion] = useState("");
  const [openRegistro, setOpenRegistro] = useState(false);

  const nuevoRegistro = () => {
    setOpenRegistro(!openRegistro);
    setAccion("Nuevo");
    setDataSelect([]);
  };

  const { setBuscador } = useProductosStore();

  return (
    <Container>
      {openRegistro && (
        <RegistrarProductos
          dataSelect={dataSelect}
          accion={accion}
          onClose={() => setOpenRegistro(!openRegistro)}
        />
      )}

      <header className="header">
        <Header stateConfig={{ state, setState: () => setState(!state) }} />
      </header>

      <section className="area1">
        <ContentFiltro>
          <Title>Productos</Title>
          <Btnfiltro
            funcion={nuevoRegistro}
            bgcolor="#f6f3f3"
            textcolor="#353535"
            icono={<v.agregar />}
          />
        </ContentFiltro>
      </section>

      <section className="area2">
        <Buscador setBuscador={setBuscador} />
      </section>

      <section className="main">
        <TablaProductos
          data={data}
          SetopenRegistro={setOpenRegistro}
          setdataSelect={setDataSelect}
          setAccion={setAccion}
        />
      </section>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.bgtotal};
  color: ${({ theme }) => theme.text};
  display: grid;
  padding: 15px;
  grid-template:
    "header" 100px
    "area1" 100px
    "area2" 100px
    "main" auto;

  .header {
    grid-area: header;
    display: flex;
    align-items: center;
  }

  .area1 {
    grid-area: area1;
    display: flex;
    align-items: center;
  }

  .area2 {
    grid-area: area2;
    display: flex;
    align-items: center;
    justify-content: end;
  }

  .main {
    grid-area: main;
  }
`;