import { useQuery } from "@tanstack/react-query";
import {ProductosTemplate} from "../components/templates/ProductosTemplate"
import {SpinnerLoader} from "../components/moleculas/SpinnerLoader"
import { useCategoriasStore } from "../store/CategoriasStore";
import { useEmpresaStore } from "../store/EmpresaStore";
import { useMarcaStore } from "../store/MarcaStore";
import { useProductosStore } from "../store/ProductosStore";
import { useUsuariosStore } from "../store/UsuariosStore";
import {BloqueoPagina} from "../components/moleculas/BloqueoPagina"

export function Productos() {
  const {datapermisos} = useUsuariosStore();
  const statePermiso = datapermisos.some((objeto)=>objeto.modulos.nombre.includes("Productos"))
 
  const {mostrarMarca} = useMarcaStore()
  const {mostrarcategorias}= useCategoriasStore()
  const { mostrarproductos, dataproductos, buscarproductos, buscador } = useProductosStore();
  const { dataempresa } = useEmpresaStore();
  const { isLoading, error } = useQuery({
    queryKey: ["mostrar productos", { _id_empresa: dataempresa?.id }],
    queryFn: () => mostrarproductos({ _id_empresa: dataempresa?.id }),
    enabled: dataempresa?.id != null,
  });
  const { data: buscardata } = useQuery({
    queryKey: [
      "buscar productos",
      { id_empresa: dataempresa.id, descripcion: buscador },
    ],
    queryFn: () =>
      buscarproductos({ _id_empresa: dataempresa.id, buscador: buscador }),
    enabled: dataempresa.id != null,
  });
  const { data:datamarcas } = useQuery({
    queryKey: ["mostrar marca", { id_empresa: dataempresa?.id }],
    queryFn: () => mostrarMarca({ id_empresa: dataempresa?.id }),
    enabled: dataempresa?.id != null,
  });
  const { data:datacategorias } = useQuery({
    queryKey: ["mostrar categorias", { id_empresa: dataempresa?.id }],
    queryFn: () => mostrarcategorias({ id_empresa: dataempresa?.id }),
    enabled: dataempresa?.id != null,
  });
  if(statePermiso==false){
    return <BloqueoPagina />
  }
  if (isLoading) {
    return <SpinnerLoader />;
  }
  if (error) {
    return <span>Error...</span>;
  }

  return <ProductosTemplate data={dataproductos}/>;
}