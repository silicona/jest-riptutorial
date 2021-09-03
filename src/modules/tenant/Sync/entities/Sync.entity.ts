import { ApiHideProperty } from '@nestjs/swagger'
import { Exclude } from 'class-transformer'
import { IsInt, IsISO8601 } from 'class-validator'
import { BaseEntity } from 'core/BaseEntity'
import { Column, Entity, Index } from 'typeorm'

@Index('Sincro', ['hotelId'], {})
@Entity('sincronizacion')
export class SyncEntity extends BaseEntity {
  @Column('int', { primary: true, name: 'idhotel', select: false })
  @ApiHideProperty()
  @Exclude()
  hotelId: number

  @Column('int', { name: 'reservas', nullable: true, unsigned: true })
  @IsInt()
  reservations: number | null

  @Column('int', { name: 'estadoHabitaciones', nullable: true, unsigned: true })
  @IsInt()
  roomStatus: number | null

  @Column('timestamp', {
    name: 'espacios',
    default: () => "'0000-00-00 00:00:00'",
  })
  @IsISO8601()
  rooms: Date

  @Column('timestamp', {
    name: 'precios',
    default: () => "'0000-00-00 00:00:00'",
  })
  @IsISO8601()
  rates: Date

  @Column('timestamp', {
    name: 'channel',
    default: () => "'0000-00-00 00:00:00'",
  })
  @IsISO8601()
  channel: Date

  // @Column('timestamp', {
  //   name: 'mailing',
  //   default: () => "'0000-00-00 00:00:00'",
  // })
  // @IsISO8601()
  // mailing: Date

  @Column('int', { name: 'llamadas', nullable: true, unsigned: true })
  @IsInt()
  calls: number | null
}
