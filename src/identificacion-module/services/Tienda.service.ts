import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateTiendaDto,
  QueryTiendaDto,
  TiendaResponseDto,
  UpdateTiendaDto,
} from '../dtos';
import { TiendaRepository } from '../repositories/Tienda.repository';
import { Tienda } from '../repositories/entities/Tienda.entity';

@Injectable()
export class TiendaService {
  constructor(private readonly tiendaRepository: TiendaRepository) {}

  async create(dto: CreateTiendaDto): Promise<TiendaResponseDto> {
    const tienda = await this.tiendaRepository.create(dto);
    return this.mapToResponse(tienda);
  }

  async findAll(query: QueryTiendaDto): Promise<TiendaResponseDto[]> {
    const tiendas = await this.tiendaRepository.findAll(query);
    return tiendas.map((tienda) => this.mapToResponse(tienda));
  }
  async findById(id: string): Promise<TiendaResponseDto> {
    const tienda = await this.tiendaRepository.findById(id);
    if (!tienda) {
      throw new NotFoundException('la tienda con este id no existe');
    }
    return this.mapToResponse(tienda);
  }

  async update(id: string, dto: UpdateTiendaDto): Promise<TiendaResponseDto> {
    const tienda = await this.tiendaRepository.findById(id);
    if (!tienda) {
      throw new NotFoundException('La tienda con este id no existe');
    }

    const updatedTienda = await this.tiendaRepository.update(id, dto);
    return this.mapToResponse(updatedTienda!);
  }

  async delete(id: string): Promise<void> {
    const tienda = await this.tiendaRepository.findById(id);
    if (!tienda) {
      throw new NotFoundException('La tienda con este id no existe');
    }
    await this.tiendaRepository.delete(id);
  }

  private mapToResponse(tienda: Tienda): TiendaResponseDto {
    return {
      id: tienda.id,
      codigoInterno: tienda.codigoInterno,
      nombreComercial: tienda.nombreComercial,
      rut: tienda.rut,
      telefono: tienda.telefono,
      estadoCaptacion: tienda.estadoCaptacion,
    };
  }
}
