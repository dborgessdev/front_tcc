import style from './MenuPrincipal.module.css';
import Botao from '../../component/Botao/Botao';
import Fila from '../../component/fila/Fila';
import CadastrarPaciente from '../../component/CadastrarPaciente/CadastrarPaciente';
import { useState } from 'react';
import { mostraFilaTriagem, mostraFilaPediatria } from '../../service/API_function';
import AdicionarFila from '../../component/AdicionarFila/AdicionarFila';

function MenuPrincipal() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }

    const toggleModal2 = () => {
        setModalOpen2(!modalOpen2);
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
                    <Botao children={"Add Fila"} onClick={() => toggleModal2()} color={'brancoButton'} />
                    <Botao children={"Sair"} onClick={() => console.log("Sair")} color={'brancoButton'} />
                    <Botao children={"Sair"} onClick={() => console.log("Sair")} color={'brancoButton'} />
                    <Botao children={"Sair"} onClick={() => console.log("Sair")} color={'brancoButton'} />
                </div>
                <div className={style.container2}>
                    <div className={style.filas}>
                        <Fila titulo={"Triagem"} funcao={mostraFilaTriagem}/>
                        <Fila titulo={"Pediatria"} funcao={mostraFilaPediatria}/>
                        <Fila titulo={"Fila 3"} />
                    </div>
                    <div className={style.detalhes}>
                        Para um bom funcionamento organização é essencial
                    </div>
                </div>
            </div>
            <CadastrarPaciente isOpen={modalOpen} onClose={toggleModal} />
            <AdicionarFila isOpen={modalOpen2} onClose={toggleModal2} />
        </div>
    );
}

export default MenuPrincipal;