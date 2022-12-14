import React from "react";
import "../hojas-de-estilo/tarea.css";
import {AiFillApple } from  "react-icons/ai";

 
function Tarea({texto}){
    return(
        <div className="tarea-contenedor">
         <div className="tarea-texto">
            {texto}
        </div>
         <div className="tarea-icono">
         <AiFillApple/>
         </div>
        </div>
    );
}
export default Tarea;