import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-8 px-8 text-sm font-light top-0">
            <ul className="flex item-center gap-3">
                <li>
                    <NavLink
                    to="/"
                    style={({ isActive, isPending, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isPending ? "red" : "black",
                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                    >Shop</NavLink>
                </li>
                <li>
                    <NavLink
                    to="/clothes"
                    style={({ isActive, isPending, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isPending ? "red" : "black",
                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                    >Ropa</NavLink>
                </li>
                <li>
                    <NavLink
                    to="/electronics"
                    style={({ isActive, isPending, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isPending ? "red" : "black",
                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                    >Electrónicos</NavLink>
                </li>
                <li>
                    <NavLink
                    to="/other"
                    style={({ isActive, isPending, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isPending ? "red" : "black",
                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                    >Otros</NavLink>
                </li>
            </ul>
            <ul className="flex item-center gap-3"> 
                <li>
                    <NavLink
                    to="/my-account"
                    style={({ isActive, isPending, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isPending ? "red" : "black",
                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                    >Mi cuenta</NavLink>
                </li>
                <li>
                    <NavLink
                    to="/my-orders"
                    style={({ isActive, isPending, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isPending ? "red" : "black",
                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                    >Mis órdenes</NavLink>
                </li>
                <li>
                    <NavLink
                    to="/sign-in"
                    style={({ isActive, isPending, isTransitioning }) => {
                        return {
                          fontWeight: isActive ? "bold" : "",
                          color: isPending ? "red" : "black",
                          viewTransitionName: isTransitioning ? "slide" : "",
                        };
                      }}
                    >Registrarse</NavLink>
                </li>
            </ul>
        </nav>
    )    
}

export default Navbar