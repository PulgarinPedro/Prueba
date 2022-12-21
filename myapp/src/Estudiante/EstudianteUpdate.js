import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { findByIdEstudiante,updateEstudiante } from '../Service/EstudianteService'
import './Estudiante.css'

function EstudiantePage() {
  
  const { estudianteId } = useParams();
  const [estudiante, setEstudiante] = useState({nombre:'',apellido:'',edad:''});

  const onSubmit = (event) => {
    event.preventDefault();
    updateEstudiante(estudiante);
  }
  const onChange = (event) =>{
    if(event.target.name==='nombre')
      setEstudiante({...estudiante,nombre:event.target.value})    
    if(event.target.name==='apellido')    
      setEstudiante({...estudiante,apellido:event.target.value})
    if(event.target.name==='edad')
      setEstudiante({...estudiante,edad:event.target.value})
  }

  useEffect(() => {    
    findByIdEstudiante(estudianteId).then(data => {
      setEstudiante(data);  
    }
    );
  }, [estudianteId]);

  return (
    <div className="boxUpdate">
      <form onSubmit={onSubmit} className="boxFormUpdate">
      <h2>Actualizar</h2>
  
          <input 
          className="formUpdateInput"
            name="nombre"
            placeholder="Nombre" 
            value={estudiante.nombre}
            onChange={onChange}
   
          />
  
          <input 
           className="formUpdateInput"
           placeholder="Apellido" 
            name="apellido"
            value={estudiante.apellido}
            onChange={onChange}
          />
        
          <input 
           className="formUpdateInput"
           placeholder="Edad"
            name="edad"
            value={estudiante.edad}
            onChange={onChange}
          />
        

        <button type="submit" className="formUpdateBtn">Guardar</button>

      </form>
      
    </div>
  );
}

export default EstudiantePage;