import styled from "styled-components";
import { Header } from "../organismos/Header";
import { TablaMarca } from "../organismos/tablas/TablaMarca";
import { Title } from "../atomos/Title";
import { useMarcaStore } from "../../store/MarcaStore";
import {v} from "../../styles/variables"
import { Btnfiltro } from "../moleculas/BtnFiltro";
import {ContentFiltro} from "../atomos/ContentFiltro"
import {Buscador} from "../organismos/Buscador"
import { RegistrarKardex } from "../organismos/formularios/RegistrarKardex";
import { useState } from "react";
import {TablaKardex} from "../organismos/tablas/TablaKardex"
import { BtnSave } from "../moleculas/BtnSave";
import {Tabs} from "../organismos/Tabs"
import { useKardexStore } from "../../store/KardexStore";
export function KardexTemplate({data}) {
  const [state, setState] = useState(false);
  const [dataSelect, setdataSelect] = useState([]);
  const [accion, setAccion] = useState("");
  const [openRegistro, SetopenRegistro] = useState(false);
  const [tipo, setTipo] = useState("");
  const nuevaentrada=()=>{
    SetopenRegistro(true);
    setTipo("entrada")

  }
  const nuevasalida=()=>{
    SetopenRegistro(true);
    setTipo("salida")

  }
  const {setBuscador} = useKardexStore()
  return (
    <Container>
      {
        openRegistro &&  <RegistrarKardex tipo={tipo} dataSelect={dataSelect} accion={accion} onClose={()=>SetopenRegistro(!openRegistro)}/>
      }
     
      <header className="header">
        <Header
          stateConfig={{ state: state, setState: () => setState(!state) }}
        />
      </header>
      <section className="area1">
        <ContentFiltro>
          <Title>
            Kardex
          </Title>
           <BtnSave bgcolor="#52de65" titulo="+ 
           Entrada" funcion={nuevaentrada}/>
             <BtnSave bgcolor="#fb6661" titulo="- 
           Salida" funcion={nuevasalida}/>
        </ContentFiltro>
       
      </section>
      <section className="area2">
        <Buscador setBuscador={setBuscador}/>
      </section>
      <section className="main">
        <Tabs data={data}/>
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
    /* background-color: rgba(103, 93, 241, 0.14); */
    display: flex;
    align-items: center;
  }
  .area1 {
    grid-area: area1;
    /* background-color: rgba(229, 67, 26, 0.14); */
    display: flex;
    align-items: center;
  }
  .area2 {
    grid-area: area2;
    /* background-color: rgba(77, 237, 106, 0.14); */
    display: flex;
    align-items: center;
    justify-content:end;
  }
  .main {
    grid-area: main;
    /* background-color: rgba(179, 46, 241, 0.14); */
  }
`;