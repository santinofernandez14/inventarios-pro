// MyRoutes.jsx
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import {Login} from "../pages/Login"
import {ProtectedRoute} from "../hooks/ProtectedRoute"
import {UserAuth} from "../context/AuthContext"
import { useQuery } from "@tanstack/react-query";
import { useUsuariosStore } from "../store/UsuariosStore";
import { SpinnerLoader } from "../components/moleculas/SpinnerLoader";
import { ErrorMolecula } from "../components/moleculas/ErrorMolecula";
import { useEmpresaStore } from "../store/EmpresaStore";
import { MostrarEmpresa } from "../supabase/crudEmpresa";
import { Configuracion } from "../pages/Configuracion";
import {Marca} from "../pages/Marca"
import {Categorias} from "../pages/Categorias"
import {Productos} from "../pages/Productos"
import {Usuarios} from "../pages/Usuarios"
import { Kardex } from "../pages/Kardex";
import { Reportes } from "../pages/Reportes";
import StockActualTodos from "../components/organismos/report/StockActualTodos";
import StockActualPorProducto from "../components/organismos/report/StockActualPorProducto";

export function MyRoutes() {
  const { user } = UserAuth();
  const { mostrarUsuarios,idusuario,mostrarpermisos } = useUsuariosStore();
  const {mostrarEmpresa} = useEmpresaStore()
  const { data:datausuarios, isLoading, error } = useQuery({
    queryKey: ["mostrar usuarios"],
    queryFn: mostrarUsuarios,
  });
  const {data:dataempresa}=useQuery({queryKey:["mostrar empresa"],queryFn:()=>mostrarEmpresa({idusaurio:idusuario}),enabled:!!datausuarios})
  const {data:datapermisos}=useQuery({queryKey:["mostrar permisos",{id_usuario:idusuario}],queryFn:()=>mostrarpermisos({id_usuario:idusuario}),enabled:!!datausuarios})

  if (isLoading){
    return <SpinnerLoader/>
  }
  if(error){
    return <ErrorMolecula mensaje={error.message}/>
  }
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute user={user} redirectTo="/login" />}>
        <Route path="/" element={<Home />} />
        <Route path="/configurar" element={<Configuracion />} />
        <Route path="/configurar/marca" element={<Marca />} />
        
        <Route path="/configurar/categorias" element={<Categorias />} />
        <Route path="/configurar/productos" element={<Productos />} />
        <Route path="/configurar/personal" element={<Usuarios />} />
        <Route path="/kardex" element={<Kardex />} />
        <Route path="/reportes" element={<Reportes />} >
        <Route path="stock-actual-todos" element={<StockActualTodos/>}/>
        <Route path="stock-actual-por-producto" element={<StockActualPorProducto/>}/>
        </Route>
      </Route>
    </Routes>
  );
}