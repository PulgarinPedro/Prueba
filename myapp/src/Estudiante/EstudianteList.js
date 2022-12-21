
function EstudianteList(props){
    return(
        <table>
        <thead >
          <tr>
            <th >Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        
            {props.children}
        
            </tbody>
      </table>
    );
    }
    
    export default EstudianteList