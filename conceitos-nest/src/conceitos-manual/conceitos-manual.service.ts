import { Injectable } from "@nestjs/common";

@Injectable()
export class ConceitosManualService {
    getConceitos(): string {
        return 'Conceitos manual';
    }
}