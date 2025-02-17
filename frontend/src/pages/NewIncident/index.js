import React from 'react';
import './styles.css';
import LogoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function NewIncident(){
    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={LogoImg} alt="Be The Hero" />

                    <h1>Cadastrar Novo Caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar
                    </Link>
                </section>

                <form>
                    <input placeholder="Titulo do caso"/>
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valor em reais"/>

                    <button className="button" type="submit">Cadastrar</button>
                </form>

            </div>
        </div>
    );
}