import { create } from "zustand";
import { ContarUsuariosXempresa } from "../supabase/crudEmpresa";
import { MostrarEmpresa } from "../supabase/crudEmpresa";
import { supabase } from "../supabase/supabase.config";

export const useEmpresaStore = create((set, get) => ({
  contadorusuarios: 0,
  dataempresa: [],
  mostrarEmpresa: async (p) => {
    const response = await MostrarEmpresa(p);
    set({ dataempresa: response.empresa });
    return response.empresa;
  },
  contarusuariosXempresa: async (p) => {
    const response = await ContarUsuariosXempresa(p);
    set({ contadorusuarios: response });
    return response;

  },
}));