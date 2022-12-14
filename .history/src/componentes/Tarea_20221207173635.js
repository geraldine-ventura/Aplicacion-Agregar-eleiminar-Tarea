import React from "react";
import "../hojas-de-estilo/tarea.css";
import {AiOutlineCerrar } from 'react-icons/fa';
 
function Tarea({texto}){
    return(
        <div className="tarea-contenedor">
         <div className="tarea-texto">
            {texto}
        </div>
         <div className="tarea-icono">
           eliminar
         </div>
        </div>
    );
}
export default Tarea;