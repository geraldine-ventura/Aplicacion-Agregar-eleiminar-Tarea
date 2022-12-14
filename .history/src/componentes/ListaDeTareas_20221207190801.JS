import React from "react";
import Tarea from "./Tarea";
import TareaFormulario from "./TareaFormulario";
function ListaDeTareas(){
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