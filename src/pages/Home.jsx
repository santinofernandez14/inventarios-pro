import { useQuery } from "@tanstack/react-query";
import {HomeTemplate} from "../components/templates/HomeTemplate"
import { useEmpresaStore } from "../store/EmpresaStore";
export function Home() {
  const {contarusuariosXempresa,dataempresa} = useEmpresaStore();
  const {data,isLoading} = useQuery({queryKey:["contar usuarios por empresa",{idempresa:dataempresa?.id}],queryFn:()=>contarusuariosXempresa({id_empresa:dataempresa?.id}),enabled:!!dataempresa})
  return (<HomeTemplate/>);
}