import './App.css';
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.jpg" ;

function App() {
  return (
    <div className="Aplicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
        <img 
         src={freeCodeCampLogo}
         className="freecodecamp-logo" 
         alt='logo de freecodecamp'
         />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
      </div>
    </div>
  );
}

export default App;
