import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { FiPower, FiTrash2} from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';


export default function Profile(){
    const[incidents, setIncidents] = useState([]);
    const ongId = localStorage.getItem('ongId')
    const ongName = localStorage.getItem('ongName');
    useEffect( () => {
        api.get('profile', {
            headers: {
                authorization: ongId,
            }
        }).then(response => {
            setIncidents(response.data)
        })
    }, [ongId]);

    async function handleDeleteIncident(id){
        try {
            await api.delete(`incidents/${id}`, {
                header: {
                    authorization: ongId,
                }
            });
            setIncidents(incidents.filter(incident => incident.id !== id))
        } catch(err){
            alert(err)
        }
    }

    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vindo, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar Novo Caso</Link>
                <button type="button" to="/">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                        <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}