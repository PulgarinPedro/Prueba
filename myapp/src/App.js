import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import EstudiantePage from './Estudiante/EstudiantePage';
import EstudianteCreate from './Estudiante/EstudianteCreate';
import EstudianteUpdate from './Estudiante/EstudianteUpdate';
import Navbar from "./Components/Navbar";
import { DataProvider } from "./context/DataContext";
function App () {

  return (
    <DataProvider> 
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/estudiante" element={<EstudiantePage />} />                          
        <Route path="/createestudiante" element={ <EstudianteCreate />   }/>   
        <Route path="/updateestudiante/:estudianteId" element={ <EstudianteUpdate />   }/>   
        </Routes>

    </BrowserRouter>   
    </DataProvider>
  );
}

export default App;
