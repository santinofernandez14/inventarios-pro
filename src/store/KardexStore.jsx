import { create } from "zustand";
import { BuscarKardex, EditarKardex, EliminarKardex, InsertarKardex, MostrarKardex } from "../supabase/crudKardex";

export const useKardexStore = create((set,get) => ({
    buscador:"",
    setBuscador:(p)=> {
        set({buscador: p})
    },
    datamarca: [],
    marcaItemSelect: [],
    parametros: {},
    mostrarKardex: async (p) => {
        const response = await MostrarKardex(p);
        set({parametros: p});
        set({datakardex: response})
        set({kardexItemSelect: response[0]})
        return response;
    },

    selectKardex:(p)=>{
        set({kardexItemSelect:p})

    },

    insertarKardex: async (p) => {
        await InsertarKardex(p)
        const{mostrarKardex} = get();
        const {parametros} = get();
        set(mostrarKardex(parametros))
    },

    eliminarKardex : async(p) => {
        await EliminarKardex(p);
        const{mostrarKardex} = get();
        const {parametros} = get();
        set(mostrarKardex(parametros))
    },

    editarKardex : async(p) => {
        await EditarKardex(p);
        const{mostrarKardex} = get();
        const {parametros} = get();
        set(mostrarKardex(parametros))
    },

    buscarKardex : async(p) => {
        const response = await BuscarKardex(p)
        set({datakardex:response})
    }

}));