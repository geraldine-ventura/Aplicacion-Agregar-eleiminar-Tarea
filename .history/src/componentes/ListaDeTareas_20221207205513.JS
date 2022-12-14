import React, {useState} from "react";
import TareaFormulario from "./TareaFormulario";
import "../hojas-de-estilo/ListaDeTareas.css";

function ListaDeTareas(){

  const [tareas,setTareas]= useState([]);

  const agregarTareas= tarea =>{
    console.log("tarea agregada");
    console.log(tarea);
  }
  }
    return(
        <>
        <TareaFormulario/>
        <div className="tarea-lista-cotenedor">
            {
                tareas.map(tarea) =>
                <Tarea
                texto={texto.texto}
                completada={tarea.completada}/>
                
            }
        </div>
        </>
    );
}
export default ListaDeTareas;