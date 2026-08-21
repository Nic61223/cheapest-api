import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Catalogo } from '../../../logistica/repositories/entities/catalogo.entity';
import { Pedido } from '../../../logistica/repositories/entities/pedido.entity';
import { PromocionTienda } from '../../../logistica/repositories/entities/promocion-tienda.entity';
import { Venta } from '../../../ventas/repositories/entities/venta.entity';

@Entity('Tiendas')
export class Tienda {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 255 })
  codigoInterno: string;

  @Column('varchar', { length: 255 })
  nombreComercial: string;

  @Column('varchar', { length: 255 })
  rut: string;

  @Column('varchar', { length: 255 })
  telefono: string;

  @Column('varchar', { length: 255 })
  estadoCaptacion: string;

  @OneToMany(() => Catalogo, (catalogo) => catalogo.tienda)
  catalogos: Catalogo[];

  @OneToMany(() => Pedido, (pedido) => pedido.tienda)
  pedidos: Pedido[];

  @OneToMany(() => PromocionTienda, (promocionTienda) => promocionTienda.tienda)
  promociones: PromocionTienda[];

  @OneToMany(() => Venta, (venta) => venta.tienda)
  ventas: Venta[];
}
