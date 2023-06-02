import React from "react";
import ap from '../../assets/apartamento.jpg'
import { FiMapPin } from 'react-icons/fi'
import './style.css'


const Card = () => {
    return (
        <div className="Container__Cards">

            <div className="card c" style={{ width: "16rem" }}>
                <img src={ap} className="card-img-top" alt="Apartamento" />
                <div className="Card__Descricao">
                    <p className="card__text titulo">Noemi Machado Residence</p>
                    <p className="card__text descricao">Apartamento 602</p>
                    <p className="card__text preco">R$ 450.000,00</p>
                    <p className="card__text local"><FiMapPin className="icone" /> Morretes,itapema- SC</p>
                </div>
            </div>
            <div className="card c" style={{ width: "16rem" }}>
                <img src={ap} className="card-img-top" alt="Apartamento" />
                <div className="Card__Descricao">
                    <p className="card__text titulo">Noemi Machado Residence</p>
                    <p className="card__text descricao">Apartamento 602</p>
                    <p className="card__text preco">R$ 450.000,00</p>
                    <p className="card__text local"><FiMapPin className="icone" /> Morretes,itapema- SC</p>
                </div>
            </div>
            <div className="card c" style={{ width: "16rem" }}>
                <img src={ap} className="card-img-top" alt="Apartamento" />
                <div className="Card__Descricao">
                    <p className="card__text titulo">Noemi Machado Residence</p>
                    <p className="card__text descricao">Apartamento 602</p>
                    <p className="card__text preco">R$ 450.000,00</p>
                    <p className="card__text local"><FiMapPin className="icone" /> Morretes,itapema- SC</p>
                </div>
            </div>
            <div className="card c" style={{ width: "16rem" }}>
                <img src={ap} className="card-img-top" alt="Apartamento" />
                <div className="Card__Descricao">
                    <p className="card__text titulo">Noemi Machado Residence</p>
                    <p className="card__text descricao">Apartamento 602</p>
                    <p className="card__text preco">R$ 450.000,00</p>
                    <p className="card__text local"><FiMapPin className="icone" /> Morretes,itapema- SC</p>
                </div>
            </div>

        </div>
    )
}


export default Card