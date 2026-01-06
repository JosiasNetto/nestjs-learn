import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConceitosManualModule } from 'src/conceitos-manual/conceitos-manual.module';
import { ConceitosAutomaticoModule } from 'src/conceitos-automatico/conceitos-automatico.module';

@Module({
  // Organiza e Encapsula as funcionalidades do app
  imports: [ConceitosManualModule, ConceitosAutomaticoModule], // Importa módulos externos
  controllers: [AppController], // Define os controladores dos requests
  providers: [AppService], // Define á lógica de negócio da aplicação
  exports: [], // Exporta os serviços para outros módulos
})
export class AppModule {}
