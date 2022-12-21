import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import EstudianteList from './EstudianteList';
import Estudiante from './Estudiante'
import { getListEstudiante } from '../Service/EstudianteService'
import  EstudianteCreate  from "./EstudianteCreate"
import { DataContext } from "../context/DataContext";
import { Modal } from '../Components/Modal/Modal'

function EstudiantePage() {

  const [estudiante, setEstudiante] = useState([]);
  const { openModal, setOpenModal } = React.useContext(DataContext);

  useEffect(() => {
    
    getListEstudiante().then(data => {
      setEstudiante(data);
    }
    );

  }, [openModal]);
  const onClick = () => {
    setOpenModal(true)
  }

  return (
    <div>
      <h2>Datos de Estudiante</h2>
      <button onClick={onClick}>Ingresar</button>
      <EstudianteList>
        {
          estudiante.map(item =>
            <Estudiante
              key={item.id}
              itemEstudiante={item} />
          )
        }
      </EstudianteList>
      {!!openModal &&
      (<Modal>
        <EstudianteCreate />
      </Modal>
      )
      }
    </div>
  );
}

export default EstudiantePage;