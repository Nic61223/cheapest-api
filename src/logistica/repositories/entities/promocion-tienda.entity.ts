import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Promocion } from './promocion.entity';
import { Tienda } from '../../../identificacion-module/repositories/entities/Tienda.entity';

@Entity('promocion_tiendas')
@Index(['promocionId', 'tiendaId'], { unique: true })
export class PromocionTienda {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  promocionId: string;

  @Column('uuid')
  tiendaId: string;

  @ManyToOne(() => Tienda, (tienda) => tienda.promociones, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'tiendaId' })
  tienda?: Tienda;

  @ManyToOne(() => Promocion, (promocion) => promocion.tiendas, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'promocionId' })
  promocion: Promocion;
}
