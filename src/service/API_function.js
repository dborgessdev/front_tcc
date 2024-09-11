import {axiosInstance} from './axiosInstance'

export const cadastrarPaciente = async (paciente) => {
    const response = await axiosInstance.post('/pacientes/cadastrar', paciente);
    return response.data;
};

export const mostraFilaTriagem = async () => {
    const response = await axiosInstance.get('/fila/listar/triagem');
    return response.data;
};


export const mostraFilaPediatria = async () => {
    const response = await axiosInstance.get('/fila/listar/pediatra');
    return response.data;
};

export const listarPacintes = async () => {
    const response = await axiosInstance.get('/pacientes/listar');
    return response.data;
};

export const cadastrarFila = async (paciente) => {
    const response = await axiosInstance.post('/fila/cadastrar', paciente);
    return response.data;
};

export const obiterPaciente = async (paciente) => {
    const response = await axiosInstance.get('/pacientes/obter/${paciente}');
    return response.data;
};

