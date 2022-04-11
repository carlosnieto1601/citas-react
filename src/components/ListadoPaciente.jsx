import Paciente from "./Paciente";


const ListadoPaciente = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-center text-3xl">Listado Paciente</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Administra tus{" "}
        <samp className="text-indigo-700 font-bold">Pacientes y Citas</samp>
      </p>
   
    <Paciente/>
  
    </div>
  );
};

export default ListadoPaciente;
