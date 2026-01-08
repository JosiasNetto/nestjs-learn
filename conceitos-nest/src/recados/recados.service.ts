import { HttpException, Injectable } from '@nestjs/common';
import { Recado } from './entities/recado.entity';
import { CreateRecadoDto } from './dtos/create-recado.dto';
import { UpdateRecadoDto } from './dtos/update-recado.dto';

@Injectable()
export class RecadosService {
    private lastId = 1;
    private recados: Recado[] = [
        {
            id: 1,
            texto: 'Recado Teste',
            de: 'Eu',
            para: 'Você',
            lido: false,
            data: new Date()
        }
    ];

    findAll(): Recado[] {
        return this.recados;
    }

    findOne(id: string) {
        const recado = this.recados.find(recado => recado.id === Number(id));
        if (!recado) {
            throw new HttpException('Recado não encontrado', 404);
        }
        return recado;
    }

    create(createRecadoDto: CreateRecadoDto) {
        this.lastId++;
        const id = this.lastId;
        const newRecado = { 
            id,
            ...createRecadoDto,
            lido: false,
            data: new Date()
        };
        this.recados.push(newRecado);
        return newRecado;
    }

    update(id: string, updateRecadoDto: UpdateRecadoDto) {
        const recadoExistenteIndex = this.recados.findIndex(recado => recado.id === Number(id));

        if (recadoExistenteIndex < 0) {
            throw new HttpException('Recado não encontrado', 404);
        }

        if (recadoExistenteIndex >= 0) {
            const recadoExistente = this.recados[recadoExistenteIndex];
            this.recados[recadoExistenteIndex] = { ...recadoExistente, ...updateRecadoDto };
            return this.recados[recadoExistenteIndex];
        }
    }

    delete(id: string) {
        const recadoExistenteIndex = this.recados.findIndex(recado => recado.id === Number(id));

        if (recadoExistenteIndex < 0) {
            throw new HttpException('Recado não encontrado', 404);
        }

        if (recadoExistenteIndex >= 0) {
            const recadoExistente = this.recados[recadoExistenteIndex];
            this.recados.splice(recadoExistenteIndex, 1);
            return recadoExistente;
        }
    }
}