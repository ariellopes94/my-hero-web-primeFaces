
import { Medicamento } from '../medicamento.model';
import { Doenca } from '../doenca.model';
import { Alergia } from '../alergia.model';
import { ContatoDeEmergencia } from '../contatoDeEmergencia.model';
export interface FichaPacienteDTO {

    id: string;
    nome: string;
    idade: number
    doadorDeOrgao: boolean;
    telefone: string;
    peso: number;
    altura: number;
    nascimento: string;
    sexo: string;
    tipoSanguinio: number;
    estadoMoradia: number;
    observacao: string;

    alergias: Alergia[];
    contatosDeEmergencias: ContatoDeEmergencia[];
    doencas: Doenca[];
    medicamentos: Medicamento[];
}