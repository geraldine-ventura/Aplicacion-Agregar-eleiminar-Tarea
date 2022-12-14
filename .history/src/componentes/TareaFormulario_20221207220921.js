import React, { useState } from "react";
import"../hojas-de-estilo/tarea-formulario.css";

function TareaFormulario(props) {

  const [input, setInput]= useState("");

  const manejarCambio = e =>{
    setInput(e.target.value);
    console.log(e.target.value);
  }
  const manejarEnvio = e =>{
    e.preventDefault();
    console.log(env form);

    const tareaNueva= {
     id:"3546",
     texto:"hola"
  }
}

  return (
    <form className="tarea-formulario"
      onSubmit={manejarEnvio}>
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

