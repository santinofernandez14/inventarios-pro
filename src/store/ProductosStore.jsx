import { create } from "zustand";
import { BuscarProductos, ReportInventarioValorado, ReportKardexEntradaSalida, ReportStockBajoMinimo, ReportStockXProducto} from "../supabase/crudProductos";
import { ReportStockProductosTodos } from "../supabase/crudProductos";
import { EditarProductos } from "../supabase/crudProductos";
import { EliminarProductos } from "../supabase/crudProductos";
import { InsertarProductos } from "../supabase/crudProductos";
import { MostrarProductos } from "../supabase/crudProductos";

export const useProductosStore = create((set, get) => ({
  buscador: "",
  setBuscador: (p) => {
    set({ buscador: p });
  },
  dataproductos: [],
  productosItemSelect: [],
  parametros: {},
  mostrarproductos: async (p) => {
    const response = await MostrarProductos(p);
    set({ parametros: p });
    set({ dataproductos: response });
    set({ productosItemSelect: response[0] });
    return response;
  },
  selectproductos: (p) => {
    set({ productosItemSelect: p });
  },
  insertarproductos: async (p) => {
    await InsertarProductos(p);
    const { mostrarproductos } = get();
    const { parametros } = get();
    set(mostrarproductos(parametros));
  },
  eliminarproductos: async (p) => {
    await EliminarProductos(p);
    const { mostrarproductos } = get();
    const { parametros } = get();
    set(mostrarproductos(parametros));
  },
  editarproductos: async (p) => {
    await EditarProductos(p);
    const { mostrarproductos } = get();
    const { parametros } = get();
    set(mostrarproductos(parametros));
  },
  buscarproductos: async (p) => {
    const response = await BuscarProductos(p);
    set({ dataproductos: response })
    return response;
    
    
    
  },
  reportStockProductosTodos: async (p) => {
    const response = await ReportStockProductosTodos(p);
    return response;
  },
  reportStockXProducto: async (p) => {
    const response = await ReportStockXProducto(p);
    return response;
  },

  reportBajoMinino: async (p) => {
    const response = await ReportStockBajoMinimo(p);
    return response;
  },
  reportKardexEntradaSalida: async (p) => {
    const response = await ReportKardexEntradaSalida(p);
    return response;
  },
  reportInventarioValorado: async (p) => {
    const response = await ReportInventarioValorado(p);
    return response;
  }
}));