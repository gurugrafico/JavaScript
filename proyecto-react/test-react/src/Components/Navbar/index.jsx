import { NavLink } from "react-router-dom";

const Navbar = () => {
    <nav>
        <ui>
            <li>
                <NavLink to="/">Shop</NavLink>
            </li>
            <li>
                <NavLink to="/clothes">Ropa</NavLink>
            </li>
            <li>
                <NavLink to="/electronics">Electrónicos</NavLink>
            </li>
            <li>
                <NavLink to="/other">Otros</NavLink>
            </li>
        </ui>
        <ui>
            <li>
                <NavLink to="/my-account">Mi cuenta</NavLink>
            </li>
            <li>
                <NavLink to="/my-orders">Mis órdenes</NavLink>
            </li>
            <li>
                <NavLink to="/sign-in">Registrarse</NavLink>
            </li>
        </ui>
    </nav>
}

export default Navbar