import React from 'react'
import {NavLink} from 'react-router-dom'

export const Menu = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink activeClassName="active" className="nav-item nav-link" exact to="/home">
                        Inicio
                    </NavLink>
                    <NavLink activeClassName="active" className="nav-item nav-link" exact to="/buscar">
                        Buscar
                    </NavLink>
                    <NavLink activeClassName="active" className="nav-item nav-link" exact to="/sobreNosotros">
                        SobreNosotros
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
