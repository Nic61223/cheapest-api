import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ItemVenta } from './item-venta.entity';
import { Tienda } from '../../../identificacion-module/repositories/entities/Tienda.entity';

@Entity('ventas')
export class Venta {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  tiendaId: string;

  @ManyToOne(() => Tienda, (tienda) => tienda.ventas)
  @JoinColumn({ name: 'tiendaId' })
  tienda?: Tienda;

  @Column('timestamp')
  fechaHora: Date;

  @Column('decimal', { precision: 10, scale: 2 })
  total: number;

  @Column('uuid')
  monedaId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => ItemVenta, (itemVenta) => itemVenta.venta, {
    cascade: true,
    eager: true,
  })
  items: ItemVenta[];
}
