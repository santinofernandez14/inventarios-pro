import {supabase} from "../supabase/supabase.config"
import Swal from "sweetalert2"
const tabla = "productos"
export async function InsertarProductos(p) {
    const {error} = await supabase.rpc("insertarproductos",p)
    if(error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
            footer: '<a href="">Agregue una nueva descripcion</a>',
          });
    }
}

export async function MostrarProductos(p) {
 
    const { data } = await supabase.rpc("mostrarproductos",p)
    return data;
  
}
export async function EliminarProductos(p) {
 
    const { error } = await supabase
      .from("productos")
      .delete()
      .eq("id", p.id);
    if (error) {
      alert("Error al eliminar", error.message);
    }

}
export async function EditarProductos(p) {
    const { error } = await supabase
      .from("productos")
      .update(p)
      .eq("id", p.id);
    if (error) {
      alert("Error al editar Productos", error.message);
    }

}
export async function BuscarProductos(p) {
    const { data} = await supabase.rpc("buscarproductos",p)
    return data;
}

//Reportes

export async function ReportStockProductosTodos(p){
  const {data,error} = await supabase.from(tabla).select().eq("id_empresa",p.id_empresa)
  if(error){
    return;
  }

  return data;

}

export async function ReportStockXProducto(p){
  const {data,error} = await supabase.from(tabla).select().eq("id_empresa",p.id_empresa).eq("id",p.id);
  if(error){
    return;
  }

  return data;

}

export async function ReportStockBajoMinimo(p){
  const {data,error} = await supabase.rpc("reportproductosbajominimo", p)
  if(error){
    return;
  }

  return data;
}

export async function ReportKardexEntradaSalida(p){
  const {data,error} = await supabase.rpc("mostrarkardexempresa",p)
  if(error){
    return;
  }

  return data;
}

export async function ReportInventarioValorado(p){
  const {data,error} = await supabase.rpc("inventariovalorado",p)
  if(error){
    return;
  }

  return data;
}