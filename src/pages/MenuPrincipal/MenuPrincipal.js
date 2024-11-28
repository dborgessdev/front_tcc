import style from './MenuPrincipal.module.css';
import Botao from '../../component/Botao/Botao';
import Fila from '../../component/fila/Fila';
import CadastrarPaciente from '../../component/CadastrarPaciente/CadastrarPaciente';
import { useState } from 'react';
import { mostraFilaTriagem, mostraFilaPediatria, mostraFilaMedico } from '../../service/API_function';
import ListarPacientes from '../../component/ListarPacientes/ListarPacientes';

function MenuPrincipal() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);
    const [modalOpen3, setModalOpen3] = useState(false);
    const [modalOpen4, setModalOpen4] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }

    const toggleModal2 = () => {
        setModalOpen2(!modalOpen2);
    }

    const toggleModal3 = () => {
        setModalOpen3(!modalOpen3);
    }

    const toggleModal4 = () => {
        setModalOpen4(!modalOpen4);
    }


    return(
        <div className={style.container}>
            <div className={style.navebar}>
                <div className={style.logo}>
                    FilaFacil
                </div>
                <div className={style.user}>
                    <a>Menu Principal</a>
                    <a>Painel de Senhas</a>
                    <a>Novo Paciente</a>
                    <a>Triagem</a>
                    <a>Novo ADM</a>
                </div>
            </div>
            <div className={style.content}>
                <div className={style.botoes}>
                    <Botao children={"Add Paciente"} onClick={() => toggleModal()} color={'hexBlueColor'} />
                    <Botao children={"Add Fila"} onClick={() => toggleModal2()} color={'hexBlueColor'} />
                    <Botao children={"Excluir da Fila"} onClick={() => toggleModal3()} color={'hexBlueColor'} />
                    <Botao children={"Excluir Paciente"} onClick={() => toggleModal4()} color={'hexBlueColor'} />
                </div>
                <div className={style.container2}>
                    <div className={style.filas}>
                        <Fila titulo={"Triagem"} funcao={mostraFilaTriagem}/>
                        <Fila titulo={"Pediatria"} funcao={mostraFilaPediatria}/>
                        <Fila titulo={"Medico"} funcao={mostraFilaMedico} />
                    </div>
                    <div className={style.detalhes}>
                        Para um bom funcionamento organização é essencial
                    </div>
                </div>
            </div>
            <CadastrarPaciente isOpen={modalOpen} onClose={toggleModal} />
            <ListarPacientes isOpen={modalOpen2} onClose={toggleModal2} botao={"Adicionar"} modeal={"1"} />
            <ListarPacientes isOpen={modalOpen3} onClose={toggleModal3} botao={"Excluir"} modeal={"2"} />
            <ListarPacientes isOpen={modalOpen4} onClose={toggleModal4} botao={"Excluir"} modeal={"3"} />
        </div>
    );
}

export default MenuPrincipal;