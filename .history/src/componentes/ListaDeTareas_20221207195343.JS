import React, {useState} from "react";
import TareaFormulario from "./TareaFormulario";
import "../hojas-de-estilo/ListaDeTareas.css";
function ListaDeTareas(){

  const[tareas,setTareas]= useState([]);
    return(
        <>
        <TareaFormulario/>
        <div className="tarea-lista-cotenedor">
            LISTA DE TAREAS
        </div>
        </>
    );
}
export default ListaDeTareas;