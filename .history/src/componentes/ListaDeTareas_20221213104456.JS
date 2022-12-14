import React, {useState} from "react";
import TareaFormulario from "./TareaFormulario";
import "../hojas-de-estilo/ListaDeTareas.css";
import Tarea from "./Tarea";

function ListaDeTareas(){

  const [tareas, setTareas]= useState([]);

  const agregarTarea = tarea =>{
    if(tarea.texto.trim()) {
      tarea.texto=tarea.texto.trim();
      const tareasActualizadas= [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  }

    return(
        <>
        <TareaFormulario onSubmit={agregarTarea}/>
        <div className="tarea-lista-cotenedor">
            {
                tareas.map((tarea) =>
                <Tarea
                texto={tarea.texto}
                completada={tarea.completada}
               />
              )
            }
        
        </div>
        </>
    );
}
export default ListaDeTareas;