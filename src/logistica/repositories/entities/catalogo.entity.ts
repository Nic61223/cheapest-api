import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Producto } from './producto.entity';
import { Tienda } from '../../../identificacion-module/repositories/entities/Tienda.entity';

@Entity('catalogos')
export class Catalogo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  tiendaId: string;

  @ManyToOne(() => Tienda, (tienda) => tienda.catalogos)
  @JoinColumn({ name: 'tiendaId' })
  tienda?: Tienda;

  @Column('timestamp')
  vigenciaDesde: Date;

  @Column('timestamp')
  vigenciaHasta: Date;

  @Column('varchar', { length: 255 })
  zona: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(() => Producto, (producto) => producto.catalogos)
  @JoinTable()
  productos: Producto[];
}
