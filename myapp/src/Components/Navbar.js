import './Navbar.css'
import { NavLink } from "react-router-dom";
export default function Navbar() {

    return (
        <ul>
            <li>
                <NavLink to={"/estudiante"} className="navlink">
                    estudiantes
                </NavLink>

            </li>
        </ul>

    );

}