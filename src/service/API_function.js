import {axiosInstance} from './axiosInstance'

export const cadastrarPaciente = async (paciente) => {
    const response = await axiosInstance.post('/pacientes/cadastro', paciente);
    return response.data;
};
