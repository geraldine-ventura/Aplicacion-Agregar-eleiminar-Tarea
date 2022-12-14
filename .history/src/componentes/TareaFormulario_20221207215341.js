import React, { useState } from "react";
import"../hojas-de-estilo/tarea-formulario.css";

function TareaFormulario(props) {

  const [input, setInput]= useState("");

  const manejarCambio = e =>{

    console.log("escribiendo...");
  }
  const manejarEnvio = e =>{
    const tareaNueva= {
     id:"3546",
     texto:"hola"
  }
}

  return (
    <form className="tarea-formulario">
     <input
      className="tarea-input"
      type="text"
      placeholder="Escribe una Tarea"
      name="texto"
      onChange={manejarCambio}
     />
    <button className="tarea-boton">
        Agregar Tarea
    </button>
    </form>
    );
  }
export default TareaFormulario;

