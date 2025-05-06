import { useQuery } from "@tanstack/react-query";


import {MarcaTemplate} from "../components/templates/MarcaTemplate";
import {SpinnerLoader} from "../components/moleculas/SpinnerLoader";
import { useEmpresaStore } from "../store/EmpresaStore";
import { useKardexStore } from "../store/KardexStore";
import { useUsuariosStore } from "../store/UsuariosStore";
import {BloqueoPagina} from "../components/moleculas/BloqueoPagina"
import { ReportesTemplate } from "../components/templates/ReportesTemplate";



export function Reportes() {
  const {datapermisos} = useUsuariosStore();
  const statePermiso = datapermisos.some((objeto)=>objeto.modulos.nombre.includes("Marca de productos"))


  const { mostrarkardex } = useKardexStore();
  const { dataempresa } = useEmpresaStore();
  const { isLoading, error } = useQuery({
    queryKey: ["mostrar kardex", { _id_empresa: dataempresa?.id }],
    queryFn: () => mostrarkardex({ _id_empresa: dataempresa?.id }),
    enabled: dataempresa?.id != null,
  });
  
  if (statePermiso == false) {
    return <BloqueoPagina />;
  }
  if (isLoading) {
    return <SpinnerLoader />;
  }
  if (error) {
    return <span>Error...</span>;
  }

  return <ReportesTemplate/>;
}