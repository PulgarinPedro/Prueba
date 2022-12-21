import { Link } from "react-router-dom";
import './Estudiante.css'

function Estudiante(props){
   
return(
    <tr > 
        <td>{props.itemEstudiante.id}</td>        
        <td> {props.itemEstudiante.nombre} </td>
        <td> {props.itemEstudiante.apellido} </td>
        <td>{props.itemEstudiante.edad}</td>        
        <td><Link to={`/updateestudiante/${props.itemEstudiante.id}`}>Editar</Link></td>
        
    </tr>
);

}
export default Estudiante