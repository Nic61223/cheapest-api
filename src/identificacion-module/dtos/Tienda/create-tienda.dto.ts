import { IsString, MaxLength } from 'class-validator';

export class CreateTiendaDto {
  @IsString()
  @MaxLength(255)
  codigoInterno: string;

  @IsString()
  @MaxLength(255)
  nombreComercial!: string;

  @IsString()
  @MaxLength(255)
  rut!: string;

  @IsString()
  @MaxLength(255)
  telefono!: string;

  @IsString()
  @MaxLength(255)
  estadoCaptacion!: string;
}
