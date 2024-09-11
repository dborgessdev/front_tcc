import React, { useState } from 'react';
import Botao from '../Botao/Botao';
import EscolhaDeFila from '../EscolhaDeFila/EscolhaDeFila';
import style from './PacientesFilaUnitario.module.css';


function PacientesFilaUnitario({ cpf, nome, dataNasc, key }) {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <div className={style.conteiner}>
                <h5>{cpf}</h5>
                <h5>{nome}</h5>
                <h5>{dataNasc}</h5>
                <div className={style.botoes}>
                    <Botao children={'Atender'} onClick={handleOpenModal} color={'brancoButton'} />
                </div>
        </div>
        <EscolhaDeFila 
            isOpen={isModalOpen} 
            onClose={handleCloseModal} 
            paciente={{ cpf, nome, dataNasc, key }}
        />
        </>
    );
}

export default PacientesFilaUnitario;
