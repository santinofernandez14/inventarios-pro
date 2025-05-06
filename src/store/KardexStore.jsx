import { create } from "zustand";
import { BuscarKardex, EditarKardex, EliminarKardex, InsertarKardex, MostrarKardex } from "../supabase/crudKardex";

export const useKardexStore = create((set,get) => ({
    buscador:"",
    setBuscador:(p)=> {
        set({buscador: p})
    },
    datakardex: [],
    kardexItemSelect: [],
    parametros: {},
    mostrarkardex: async (p) => {
        const response = await MostrarKardex(p);
        set({parametros: p});
        set({datakardex: response})
        set({kardexItemSelect: response[0]})
        return response;
    },

    selectKardex:(p)=>{
        set({kardexItemSelect:p})

    },

    insertarkardex: async (p) => {
        await InsertarKardex(p)
        const{mostrarkardex} = get();
        const {parametros} = get();
        set(mostrarkardex(parametros))
    },

    eliminarkardex : async(p) => {
        await EliminarKardex(p);
        const{mostrarkardex} = get();
        const {parametros} = get();
        set(mostrarkardex(parametros))
    },

    editarkardex : async(p) => {
        await EditarKardex(p);
        const{mostrarkardex} = get();
        const {parametros} = get();
        set(mostrarkardex(parametros))
    },

    buscarkardex : async(p) => {
        const response = await BuscarKardex(p)
        set({datakardex:response})
    }

}));