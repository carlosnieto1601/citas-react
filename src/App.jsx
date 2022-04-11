import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPaciente from "./components/ListadoPaciente";


function App() {
  return (
    <div className="container mx-auto mt-8">
      <Header />
      <div className="mt-10 md:flex">
        <Formulario />
        <ListadoPaciente />
      </div>
    </div>
  );
}

export default App;
