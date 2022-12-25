import React from "react";
import "../hojas-de-estilo/tarea.css";
import {AiFillApple } from  "react-icons/ai";

 //props
function Tarea({id, texto, completada, completadaTarea, eliminarTarea }){
  return(
      <div className={completada ? "tarea-contenedor completada": "tarea-contenedor"}>
       <div 
         className="tarea-texto"
         onClick={() => completadaTarea (id)}>
         {texto}
        </div>
        <div
          className="tarea-contenedor-iconos"
          onClick={() => eliminarTarea(id)}>
         <AiFillApple className="tarea-icono"/>
         </div>
        </div>
    );
  }
export default Tarea;