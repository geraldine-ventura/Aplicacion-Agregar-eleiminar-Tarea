import React, {useState} from "react";
import TareaFormulario from "./TareaFormulario";
import "../hojas-de-estilo/ListaDeTareas.css";
import Tarea from "./Tarea";

function ListaDeTareas(){

  const [tareas, setTareas]= useState([]);

  const agregarTarea = tarea =>{
    console.log(tarea);
    if(tarea.texto.trim()) {
      
      tarea.texto=tarea.texto.trim();
      const tareasActualizadas= [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  }
  const eliminarTarea = id =>{
    const tareasActualizadas = tareas.filter (tarea=> tarea.id !==id);
    setTareas(tareasActualizadas);
  }

    return(
        <>
        <TareaFormulario onSubmit={agregarTarea}/>
        <div className="tarea-lista-cotenedor">
            {
                tareas.map((tarea) =>
                <Tarea
                key={tarea.id}
                id={tarea.id}
                texto={tarea.texto}
                completada={tarea.completada}
                eliminarTarea= {eliminartarea.Tarea}
               />
              )
            }
        
        </div>
        </>
    );
}
export default ListaDeTareas;