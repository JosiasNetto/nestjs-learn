import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateRecadoDto {
    @IsString({
        message: 'Mensagem de erro'
    })
    @IsNotEmpty()
    @MinLength(5)
    readonly texto: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    readonly de: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    readonly para: string;
}