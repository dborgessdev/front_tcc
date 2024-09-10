import style from './MenuPrincipal.module.css';
import Botao from '../../component/Botao/Botao';
import Fila from '../../component/fila/Fila';
import CadastrarPaciente from '../../component/CadastrarPaciente/CadastrarPaciente';
import { useState } from 'react';

function MenuPrincipal() {
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }


    return(
        <div className={style.container}>
            <div className={style.navebar}>
                <div className={style.logo}>
                    Teste
                </div>
                <div className={style.user}>
                    <a>Home</a>
                    <a>Home</a>
                    <a>Home</a>
                </div>
            </div>
            <div className={style.content}>
                <div className={style.botoes}>
                    <Botao children={"Add Paciente"} onClick={() => toggleModal()} color={'brancoButton'} />
                    <Botao children={"Add Fila"} onClick={() => console.log("Sair")} color={'brancoButton'} />
                    <Botao children={"Sair"} onClick={() => console.log("Sair")} color={'brancoButton'} />
                    <Botao children={"Sair"} onClick={() => console.log("Sair")} color={'brancoButton'} />
                    <Botao children={"Sair"} onClick={() => console.log("Sair")} color={'brancoButton'} />
                </div>
                <div className={style.container2}>
                    <div className={style.filas}>
                        <Fila titulo={"Fila 1"} />
                        <Fila titulo={"Fila 2"} />
                    </div>
                    <div className={style.detalhes}>
                        Para um bom funcionamento organização é essencial
                    </div>
                </div>
            </div>
            <CadastrarPaciente isOpen={modalOpen} onClose={toggleModal} />
        </div>
    );
}

export default MenuPrincipal;