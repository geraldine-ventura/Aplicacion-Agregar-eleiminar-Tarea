import './App.css';
import freeCodeCampLogo from "./imagenes/logo.png";

function App() {
  return (
    <div className="Applicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
        <img 
         src={freeCodeCampLogo}
         className="freecodecamp-logo" 
         />
      </div>
    </div>
  );
}

export default App;
