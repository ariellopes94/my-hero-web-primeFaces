import { Alergia } from './alergia.model';
import { Medicamento } from './medicamento.model';
import { ContatoDeEmergencia } from './contatoDeEmergencia.model';

import { Doenca } from './doenca.model';

export class Paciente{

    id?: number;
    cpf: string;
    nome: string;
    email: string;
    senha: string;
    doadorDeOrgao: boolean;
    telefone: string;
    peso: number;
    altura: number;
    nascimento: string;
    sexo: string;
    tipoSanguinio: number;
    estadoMoradia: number;
    observacao: string;

    medicamentos: Medicamento[] = [];
    doencas: Doenca[] = [];
    alergias: Alergia[];
    contatosDeEmergencias: ContatoDeEmergencia[] = [];
    


}