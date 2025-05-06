import Swal from "sweetalert2"
import { supabase } from "./supabase.config";
export async function InsertarKardex(p) {
    const {error} = await supabase.from("kardex").insert(p)
    if(error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
            footer: '<a href="">Agregue una nueva descripcion</a>',
          });
    }
}

export async function MostrarKardex(p) {
 
    const { data } = await supabase.rpc("mostrarkardexempresa",p).order("id",{ascending:false})
     
    return data;
  
}
export async function EliminarKardex(p) {
 
    const { error } = await supabase
      .from("kardex")
      .delete()
      .eq("id", p.id);
    if (error) {
      alert("Error al eliminar", error.message);
    }

}
export async function EditarKardex(p) {
    const { error } = await supabase
      .from("kardex")
      .update(p)
      .eq("id", p.id);
    if (error) {
      alert("Error al editar kardex", error.message);
    }

}
export async function BuscarKardex(p) {
    const { data} = await supabase.rpc("buscarkardexempresa",p)
   
    return data;
}