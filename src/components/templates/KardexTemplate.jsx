import styled from "styled-components";
import { Header } from "../organismos/Header";
import { TablaMarca } from "../organismos/tablas/TablaMarca";
import { Title } from "../atomos/Title";
import { useMarcaStore } from "../../store/MarcaStore";
import { v } from "../../styles/variables";
import { Btnfiltro } from "../moleculas/BtnFiltro";
import { ContentFiltro } from "../atomos/ContentFiltro";
import { Buscador } from "../organismos/Buscador";
import { RegistrarKardex } from "../organismos/formularios/RegistrarKardex";
import { useState } from "react";
import { TablaKardex } from "../organismos/tablas/TablaKardex";
import { BtnSave } from "../moleculas/BtnSave";
import { Tabs } from "../organismos/Tabs";
import { useKardexStore } from "../../store/KardexStore";

export function KardexTemplate({ data }) {
  const [state, setState] = useState(false);
  const [dataSelect, setDataSelect] = useState([]);
  const [accion, setAccion] = useState("");
  const [openRegistro, setOpenRegistro] = useState(false);
  const [tipo, setTipo] = useState("");

  const nuevaEntrada = () => {
    setOpenRegistro(true);
    setTipo("entrada");
  };

  const nuevaSalida = () => {
    setOpenRegistro(true);
    setTipo("salida");
  };

  const { setBuscador } = useKardexStore();

  return (
    <Container>
      {openRegistro && (
        <RegistrarKardex
          tipo={tipo}
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
          <Title>Kardex</Title>
          <BtnSave
            bgcolor="#52de65"
            titulo="+ Entrada"
            funcion={nuevaEntrada}
          />
          <BtnSave
            bgcolor="#fb6661"
            titulo="- Salida"
            funcion={nuevaSalida}
          />
        </ContentFiltro>
      </section>

      <section className="area2">
        <Buscador setBuscador={setBuscador} />
      </section>

      <section className="main">
        <Tabs data={data} />
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