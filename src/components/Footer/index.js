import React from 'react'
import '../Footer/index.css'

export const Footer = () => {
    return (
        <footer className="bg-dark text-center text-lg-start">
            <div className="row">
                <div className="text-center p-3 text-info">
                    <p>
                        Pagina creada para la asignatura Full Stack 
                        <br/>Haciendo peticiones a un API de BreakingBad
                    </p>
                    &copy; 2021 Steveen Dominguez
                </div>
            </div>
        </footer>
    )
}
