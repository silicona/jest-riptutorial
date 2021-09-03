import { ApiHideProperty } from '@nestjs/swagger'
import { Exclude } from 'class-transformer'
import { IsBoolean, IsInt, IsString } from 'class-validator'
import { BaseEntity } from 'core/BaseEntity'
import { RateEntity } from 'modules/tenant/Rate/entities/Rate.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { SpaceEntity } from '../../Space/entities/Space.entity'
import { SpaceSubTypeEntity } from '../../Space/entities/SpaceSubType.entity'

@Entity('espaciosTipos')
export class SpaceTypeEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'idTipoEspacio' })
  @IsInt()
  id: number

  @Column('int', { primary: true, name: 'idHotel', select: false })
  @IsInt()
  @ApiHideProperty()
  @Exclude()
  hotelId: number

  @Column('varchar', { name: 'Nombre', length: 200 })
  @IsString()
  name: string

  @Column('int', { name: 'Orden' })
  @IsInt()
  order: number

  @Column('tinyint', { primary: true, name: 'VentaOnlineDefault' })
  @IsBoolean()
  defaultOnlineSale: boolean

  @Column('tinyint', { name: 'Alojamiento' })
  @IsBoolean()
  accommodation: boolean

  @Column('int', { name: 'TarifaPlanning' })
  @IsInt()
  planningRate: number

  @Column('int', { name: 'ReservasXDia', nullable: true, default: () => 1 })
  @IsInt()
  bookingPerDay: number | null

  @OneToMany(() => RateEntity, (rate) => rate.spaceType)
  rates?: RateEntity[]

  @OneToMany(() => SpaceSubTypeEntity, (spaceSubType) => spaceSubType.spaceType)
  spaceSubTypes?: SpaceSubTypeEntity[]

  @OneToMany(() => SpaceEntity, (space) => space.spaceType)
  spaces?: SpaceEntity[]
}
