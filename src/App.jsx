
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import { useState, useEffect } from 'react'
import ListadoPaciente from "./components/ListadoPaciente";


function App() {
  
  const [pacientes, setPacientes] = useState([]);

  return (
    <div className="container mx-auto mt-8">
      <Header 
      />
      <div className="mt-10 md:flex">
        <Formulario 
        pacientes={pacientes}
        setPacientes={setPacientes}
        />
        <ListadoPaciente />
      </div>
    </div>
  );
}

export default App;
