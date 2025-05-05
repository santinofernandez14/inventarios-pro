import {BloqueoPagina} from "../components/moleculas/BloqueoPagina"
import { useUsuariosStore } from "../store/UsuariosStore";
export function ValidarBloqueoPagina(modulo) {
    const { datapermisos } = useUsuariosStore();
    const statePermiso = datapermisos.some((objeto) =>
      objeto.modulos.nombre.includes("Categoria de productos")
    );
    // if (statePermiso == false) {
    //   return <BloqueoPagina />;
    // }
    return statePermiso
}