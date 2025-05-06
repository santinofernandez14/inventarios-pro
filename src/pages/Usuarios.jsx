import { useQuery } from "@tanstack/react-query";
import {SpinnerLoader} from "../components/moleculas/SpinnerLoader";
import {useEmpresaStore} from "../store/EmpresaStore";
import {useMarcaStore} from "../store/MarcaStore";
import { useUsuariosStore } from "../store/UsuariosStore";
import {BloqueoPagina} from "../components/moleculas/BloqueoPagina";
import {UsuariosTemplate} from "../components/templates/UsuariosTemplate"


export function Usuarios() {
  const {
    mostrarModulos,
    mostrarusuariosTodos,
    datausuarios,
    buscarusuarios,
    buscador,
    datapermisos,
  } = useUsuariosStore();
  const statePermiso = datapermisos.some((objeto) =>
    objeto.modulos.nombre.includes("Personal")
  );
  const { dataempresa } = useEmpresaStore();
  const { isLoading, error } = useQuery({
    queryKey: ["mostrar usuarios", { _id_empresa: dataempresa?.id }],
    queryFn: () => mostrarusuariosTodos({ _id_empresa: dataempresa?.id }),
    enabled: dataempresa?.id != null,
  });
  const { data: buscardata } = useQuery({
    queryKey: [
      "buscar usuarios",
      { _id_empresa: dataempresa.id, buscador: buscador },
    ],
    queryFn: () =>
      buscarusuarios({ _id_empresa: dataempresa.id, buscador: buscador }),
    enabled: dataempresa.id != null,
  });
  const { data: datamodulos } = useQuery({
    queryKey: ["mostrar modulos"],
    queryFn: mostrarModulos,
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

  return <UsuariosTemplate data={datausuarios} />;
}