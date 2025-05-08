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
import StockBajoMinimo from "../components/organismos/report/StockBajoMinino";
import KardexEntradaSalida from "../components/organismos/report/KardexEntradaSalida"
import StockInventarioValorado from "../components/organismos/report/StockInventarioValorado";
import { Layout } from "../hooks/Layout";

export function MyRoutes() {
  
  return (
    <Routes>
      <Route path="/login" element={<ProtectedRoute accessBy="non-authenticated">
       
        <Login />
        
        
        </ProtectedRoute>} />
        <Route path="/" element={<ProtectedRoute accessBy="authenticated">
          <Layout>
          <Home />
        </Layout>
        </ProtectedRoute>} />

        <Route path="/configurar" element={<ProtectedRoute accessBy="authenticated">
          <Layout>
          <Configuracion />
        </Layout>
        </ProtectedRoute>} />
       
        <Route path="/configurar/marca" element={<ProtectedRoute accessBy="authenticated">
          <Layout>
          <Marca />
        </Layout>
        </ProtectedRoute>} />
       
      
        <Route path="/configurar/categorias" element={<ProtectedRoute accessBy="authenticated">
          <Layout>
          <Categorias />
        </Layout>
        </ProtectedRoute>} />
       
        
        <Route path="/configurar/productos" element={<ProtectedRoute accessBy="authenticated">
          <Layout>
          <Productos />
        </Layout>
        </ProtectedRoute>} />
       
        <Route path="/configurar/personal" element={<ProtectedRoute accessBy="authenticated">
          <Layout>
          <Usuarios />
        </Layout>
        </ProtectedRoute>} />
       
        <Route path="/kardex" element={<ProtectedRoute accessBy="authenticated">
          <Layout>
          <Kardex />
        </Layout>
        </ProtectedRoute>} />
       
        <Route path="/reportes" element={<ProtectedRoute accessBy="authenticated">
          <Layout>
          <Reportes />
        </Layout>
        </ProtectedRoute>} 
        >

        <Route path="stock-actual-todos" element={<StockActualTodos/>}/>
        <Route path="stock-actual-por-producto" element={<StockActualPorProducto/>}/>
        <Route path="stock-bajo-minimo" element={<StockBajoMinimo/>}/>
        <Route path="kardex-entradas-salidas" element={<KardexEntradaSalida/>}/>
        <Route path="inventario-valorado" element={<StockInventarioValorado/>}/>
          </Route>
       
       
       
        
        
      
     
    </Routes>
  );
}