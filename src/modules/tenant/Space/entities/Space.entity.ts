import { ApiHideProperty } from '@nestjs/swagger'
import { Exclude } from 'class-transformer'
import { IsBoolean, IsDate, IsEnum, IsInt, IsString } from 'class-validator'
import { BaseEntity } from 'core/BaseEntity'
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { SpaceStatus } from '../@types'
import { SpaceAssociatedEntity } from '../../SpaceAssociated/entities/SpaceAssociated.entity'
import { SpaceSubTypeEntity } from './SpaceSubType.entity'
import { SpaceTypeEntity } from '../../SpaceType/entities/SpaceTypes.entity'

@Index('TipoEspacios', ['hotelId', 'spaceSubTypeId', 'spaceTypeId'], {})
@Entity('espacios')
export class SpaceEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'idEspacio' })
  @IsInt()
  id: number

  @Column('varchar', { name: 'nombreEspacio', length: 250 })
  @IsString()
  name: string

  @Column('int', { name: 'ordenEspacio' })
  @IsInt()
  order: number

  @Column('int', { name: 'idTipoEspacio', nullable: true })
  @IsInt()
  spaceTypeId: number | null

  @Column('int', { name: 'idSubtipoEspacio', nullable: true })
  @IsInt()
  spaceSubTypeId: number | null

  @Column('varchar', { name: 'estado', nullable: true, default: () => SpaceStatus.AVAILABLE })
  @IsEnum(SpaceStatus)
  status: string | null

  @Column('tinyint', { name: 'online', nullable: true, default: () => 1 })
  @IsBoolean()
  online: boolean | null

  @Column('int', { name: 'idhotel', select: false })
  @ApiHideProperty()
  @Exclude()
  @IsInt()
  hotelId: number

  @Column('date', { name: 'cambioLenceria', nullable: true })
  @IsDate()
  changeSheets: string | null

  @Column('date', { name: 'toallas', nullable: true })
  @IsDate()
  towels: string | null

  @Column('date', { name: 'amenities', nullable: true })
  @IsDate()
  amenities: string | null

  @Column('text', { name: 'observaciones', nullable: true })
  @IsString()
  observations: string | null

  @Column('text', { name: 'direccion', nullable: true })
  @IsString()
  address: string | null

  @Column('int', { name: 'idDatosFacturacion', nullable: true, default: () => 0 })
  @IsInt()
  invoiceDataId: number | null

  @Column('int', { name: 'idPropietario', nullable: true, default: () => 0 })
  @IsInt()
  ownerId: number | null

  @Column('int', { name: 'instrucciones_qr', nullable: true, default: () => 0 })
  @IsInt()
  instructionQr: number | null

  @ManyToOne(() => SpaceSubTypeEntity, (spaceSubType) => spaceSubType.spaces)
  @JoinColumn({ name: 'idSubtipoEspacio' })
  spaceSubType: SpaceSubTypeEntity

  @ManyToOne(() => SpaceTypeEntity, (spaceType) => spaceType.spaces)
  @JoinColumn({ name: 'idTipoEspacio' })
  spaceType: SpaceTypeEntity

  @OneToMany(() => SpaceAssociatedEntity, (linkedSpace) => linkedSpace.space)
  linkedSpaces: SpaceTypeEntity
}
