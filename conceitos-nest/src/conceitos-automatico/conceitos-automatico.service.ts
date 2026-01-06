import { Injectable } from '@nestjs/common';

@Injectable()
export class ConceitosAutomaticoService {
    getConceitos(): string {
        return 'Conceitos automatico';
    }
}
