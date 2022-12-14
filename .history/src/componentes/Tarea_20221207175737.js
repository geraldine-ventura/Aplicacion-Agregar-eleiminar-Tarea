import React from "react";
import "../hojas-de-estilo/tarea.css";
import {AiFillApple } from  "react-icons/ai";

 
function Tarea({texto}){
    return(
        <div className="tarea-contenedor">
         <div className="tarea-texto">
            {texto}
        </div>
         <div className="tarea-contenedor-iconos">
         <AiFillApple className="tarea-icono"/>
         </div>
        </div>
    );
}
export default Tarea;