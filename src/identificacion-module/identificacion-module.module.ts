import { Module } from '@nestjs/common';
import { DatabaseModule } from '../datasources/database.module';
import { TiendaController } from './controllers/Tienda.controlles';
import { repositoryProviders } from './repositories/repositorry.providers';
import { TiendaRepository } from './repositories/Tienda.repository';
import { TiendaService } from './services/Tienda.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TiendaController],
  providers: [...repositoryProviders, TiendaRepository, TiendaService],
  exports: [TiendaService],
})
export class IdentificacionModuleModule {}
