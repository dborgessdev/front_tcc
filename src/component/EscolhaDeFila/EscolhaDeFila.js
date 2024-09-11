import React, { useState } from 'react';
import Botao from '../Botao/Botao';
import style from './EscolhaDeFila.module.css';
import { cadastrarFila } from '../../service/API_function';

function EscolhaDeFila({ isOpen, onClose, paciente}) {
    const [fila, setFila] = useState('triagem'); // Fila inicial
    const [prioridade, setPrioridade] = useState(1); // Prioridade inicial (normal)

    const handleFilaChange = (e) => {
        setFila(e.target.value);
    };

    const handlePrioridadeChange = (e) => {
        setPrioridade(Number(e.target.value));
    };

    const handleSubmit = () => {
        alert(paciente.key)
        const novoNaFila = {
            nome: paciente.nome,
            prioridade: prioridade,
            status: fila,
            dataNasc: paciente.data,
            cpf: paciente.cpf
        }

        try {
            cadastrarFila(novoNaFila);
            console.log(novoNaFila);
            onClose();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            {isOpen && (
                <div className={style.modalOverlay}>
                    <div className={style.modalContent}>
                        <div className={style.cima}>
                            <h3>Mover Paciente para Fila</h3>
                            <p>Nome: {paciente.nome}</p>
                            <p>CPF: {paciente.cpf}</p>
                        </div>
                        <div className={style.selectContainer}>
                            <label htmlFor="fila">Fila:</label>
                            <select id="fila" value={fila} onChange={handleFilaChange}>
                                <option value="triagem">Triagem</option>
                                {/* Outras filas podem ser adicionadas aqui futuramente */}
                            </select>
                        </div>
                        <div className={style.selectContainer}>
                            <label htmlFor="prioridade">Prioridade:</label>
                            <select id="prioridade" value={prioridade} onChange={handlePrioridadeChange}>
                                <option value={3}>Urgente</option>
                                <option value={2}>Prioritário</option>
                                <option value={1}>Normal</option>
                            </select>
                        </div>

                        <div className={style.buttonContainer}>
                            <Botao children={'Cancelar'} onClick={onClose} color={'brancoButton'} />
                            <Botao children={'Mover'} onClick={handleSubmit} color={'brancoButton'} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default EscolhaDeFila;
