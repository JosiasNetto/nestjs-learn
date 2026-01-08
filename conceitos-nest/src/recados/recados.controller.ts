import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { RecadosService } from './recados.service';
import { CreateRecadoDto } from './dtos/create-recado.dto';
import { UpdateRecadoDto } from './dtos/update-recado.dto';

@Controller('recados')
export class RecadosController {
    constructor(private readonly recadosService: RecadosService) {}

    @Get()
    findAll(@Query() pagination: any) {
        const { limit = 10, offset = 0 } = pagination
        return this.recadosService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string ) {
        return this.recadosService.findOne(id)
    }

    @Post()
    create(@Body() createRecadoDto: CreateRecadoDto) {
        return this.recadosService.create(createRecadoDto)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateRecadoDto: UpdateRecadoDto) {
        return this.recadosService.update(id, updateRecadoDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.recadosService.delete(id)
    }
} 
