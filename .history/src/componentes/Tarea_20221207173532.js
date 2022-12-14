import React from "react";
import "../hojas-de-estilo/tarea.css";
AiOutlineCerrar Circunferencia
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