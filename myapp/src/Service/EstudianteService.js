const urlCrud = 'http://localhost:3001';


const getListEstudiante = async () => {
    const response = await fetch(`${urlCrud}/estudiante/`);  
    const data = await response.json();     
    return  data;
}
// Obtener solo un id
const findByIdEstudiante = async (estudianteId) => {
    const response = await fetch(`${urlCrud}/estudiante/${estudianteId}`);  
    const data = await response.json();     
    return  data;
}

const createEstudiante = async (estudiante) => {

    const resp = await fetch(`${urlCrud}/estudiante/`, {
        method: 'POST',
        body: JSON.stringify(estudiante),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}


const updateEstudiante = async (estudiante) => {
    console.log(estudiante)  
    const resp = await fetch(`${urlCrud}/estudiante`, {
        method: 'PUT',
        body: JSON.stringify(estudiante),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

export {
    getListEstudiante,
    createEstudiante,
    updateEstudiante,
    findByIdEstudiante

}
