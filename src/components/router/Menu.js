import React from 'react'
import {NavLink} from 'react-router-dom'
import './Menu.css'

export const Menu = () => {
    return (
        <nav className="nav-wrapper">
                <div className="left hide-on-med-and-down">
                    <NavLink activeClassName="active" exact to="/home" style={{padding: 10, color: 'white'}}>
                        Inicio
                    </NavLink>
                    <NavLink activeClassName="active" exact to="/buscar" style={{padding: 10, color: 'white'}}>
                        Buscar
                    </NavLink>
                    <NavLink activeClassName="active" exact to="/sobreNosotros" style={{padding: 10, color:'white'}}>
                        Sobre Nosotros
                    </NavLink>
                </div>
        </nav>
    )
}
