import React from "react";
import './style.css'
import { AiOutlineDown } from 'react-icons/ai'

const Button = () => {
    return (
        <div className="Conteiner__Button">
            <a className="Botao" >
                <p>Ver Mais <AiOutlineDown /></p>
            </a>
            <div className="background__borda" />
        </div>

    )
}


export default Button;