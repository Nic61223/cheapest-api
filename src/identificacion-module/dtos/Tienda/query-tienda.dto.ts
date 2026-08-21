import { IsOptional, IsString, MaxLength } from 'class-validator';

export class QueryTiendaDto {
  @IsOptional()
  @IsString()
  @MaxLength(255)
  codigoInterno?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  nombreComercial?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  rut?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  estadoCaptacion?: string;
}
