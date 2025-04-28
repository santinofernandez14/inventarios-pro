import { create } from "zustand";
import { BuscarPersonal, EditarPersonal, EliminarPersonal, InsertarPersonal, MostrarPersonal } from "../supabase/crudPersonal";

export const usePersonalStore = create((set,get) => ({
    buscador:"",
    setBuscador:(p)=> {
        set({buscador: p})
    },
    datapersonal: [],
    personalItemSelect: [],
    parametros: {},
    mostrarPersonal: async (p) => {
        const response = await MostrarPersonal(p);
        set({parametros: p});
        set({datapersonal: response})
        set({personalItemSelect: response[0]})
        return response;
    },

    selectPersonal:(p)=>{
        set({personalItemSelect:p})

    },

    insertarPersonal: async (p) => {
        await InsertarPersonal(p)
        const{mostrarPersonal} = get();
        const {parametros} = get();
        set(mostrarPersonal(parametros))
    },

    eliminarPersonal : async(p) => {
        await EliminarPersonal(p);
        const{mostrarPersonal} = get();
        const {parametros} = get();
        set(mostrarPersonal(parametros))
    },

    editarPersonal : async(p) => {
        await EditarPersonal(p);
        const{mostrarPersonal} = get();
        const {parametros} = get();
        set(mostrarPersonal(parametros))
    },

    buscarPersonal : async(p) => {
        const response = await BuscarPersonal(p)
        set({datapersonal:response})
    }

}));