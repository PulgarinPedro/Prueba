import React, { useState } from "react";
import { createEstudiante } from '../Service/EstudianteService'
import { DataContext } from "../context/DataContext";

function EstudianteCreate() {
  
  const { setOpenModal } = React.useContext(DataContext);
  
  const onClick = () => {
    setOpenModal(false)
  } 

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const objeto = {
     nombre,
     apellido,
     edad,
    }
    createEstudiante(objeto).then(
      setOpenModal(false)
    );
 }
  
 const onCancel = () =>{
  setOpenModal(false);
 }

  const onChange = (event) =>{
    if(event.target.name==='nombre')
    setNombre(event.target.value)
    
    if(event.target.name==='apellido')
    setApellido(event.target.value)

    if(event.target.name==='edad')
    setEdad(event.target.value)
  }

  return (
      <form onSubmit={onSubmit}>
        <label>
          Nombre
          <input 
            name="nombre"
            value={nombre}
            onChange={onChange}
          />
        </label>
        <label>
          Apellido
          <input 
            name="apellido"
            value={apellido}
            onChange={onChange}
          />
        </label>
        <label>
          Edad
          <input 
            name="edad"
            value={edad}
            onChange={onChange}
          />
        </label>

        <button type="submit">Guardar</button>
        <button onClick={onClick}>Cerrar</button>
      </form>
  );
}

export default EstudianteCreate;