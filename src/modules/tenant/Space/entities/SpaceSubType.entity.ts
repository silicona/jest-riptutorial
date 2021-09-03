import { ApiHideProperty } from '@nestjs/swagger'
import { Exclude } from 'class-transformer'
import { IsBoolean, IsEnum, IsInt, IsString, Matches } from 'class-validator'
import { BaseEntity } from 'core/BaseEntity'
import { ReservationEntity } from 'modules/tenant/Reservation/entities/Reservation.entity'
import { MinimumStayEntity } from 'modules/tenant/Restriction/entities/MinimumStay.entity'
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { DirectContact, StayType } from '../@types'
import { SpaceEntity } from './Space.entity'
import { SpaceTypeEntity } from '../../SpaceType/entities/SpaceTypes.entity'

@Index('Tipo', ['hotelId', 'spaceTypeId', 'name'], {})
@Entity('espaciosSubtipo')
export class SpaceSubTypeEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'idSubtipoEspacio' })
  @IsInt()
  id: number

  @Column('int', { name: 'idTipoEspacio', default: () => 0 })
  @IsInt()
  spaceTypeId: number

  @Column('varchar', { name: 'subtipoEspacio', length: 250 })
  @IsString()
  name: string

  @Column('int', { name: 'nombre_idiomas', nullable: true })
  @IsInt()
  langName: number | null

  @Column('mediumtext', { name: 'descripcion', nullable: true })
  @IsString()
  descriptionEs: string | null

  @Column('mediumtext', { name: 'descripcionEn', nullable: true })
  @IsString()
  descriptionEn: string | null

  @Column('mediumtext', { name: 'descripcionFr', nullable: true })
  @IsString()
  descriptionFr: string | null

  @Column('mediumtext', { name: 'descripcionIt', nullable: true })
  @IsString()
  descriptionIt: string | null

  @Column('mediumtext', { name: 'descripcionDe', nullable: true })
  @IsString()
  descriptionDe: string | null

  @Column('mediumtext', { name: 'descripcionCat', nullable: true })
  @IsString()
  descripctonCa: string | null

  @Column('mediumtext', { name: 'descripcionPt', nullable: true })
  @IsString()
  descriptionPt: string | null

  @Column('mediumtext', { name: 'descripcionRu', nullable: true })
  @IsString()
  descriptionRu: string | null

  @Column('int', { name: 'idHotel', select: false })
  @ApiHideProperty()
  @Exclude()
  @IsInt()
  hotelId: number

  @Column('int', { name: 'capacidadmaxima', nullable: true, default: () => 2 })
  @IsInt()
  maximumCapacity: number | null

  @Column('int', { name: 'capacidadMaximaAdulto', nullable: true, default: () => 2 })
  @IsInt()
  maximumAdults: number | null

  @Column('int', { name: 'capacidadHabitacion', nullable: true, default: () => 1 })
  @IsInt()
  standardCapacity: number | null

  @Column('int', { name: 'idResidencial', nullable: true, default: () => 0 })
  @IsInt()
  zoneId: number | null

  @Column('varchar', { name: 'RefCatastral', nullable: true, length: 250, default: () => '' })
  @IsString()
  catastralRef: string | null

  @Column('varchar', { name: 'idTuristica', nullable: true, length: 250, default: () => '' })
  @IsString()
  turisticId: string | null

  @Column('enum', { name: 'mostrarContacto', nullable: true, enum: DirectContact, default: () => 'NO' })
  @IsEnum(DirectContact)
  showContact: DirectContact | null

  @Column('int', { name: 'periodosBloqueados', nullable: true, comment: 'Periodos Bloqueados tras CheckOut', default: () => 0 })
  @IsInt()
  lockPeriods: number | null

  @Column('time', { name: 'horaEntrada', nullable: true, default: () => '12:00:00' })
  @IsString()
  @Matches(/\d{2}:\d{2}:\d{2}/)
  checkInTime: string | null

  @Column('time', { name: 'horaSalida', nullable: true, default: () => '12:00:00' })
  @IsString()
  @Matches(/\d{2}:\d{2}:\d{2}/)
  checkOutTime: string | null

  @Column('int', { name: 'idHospederiaUsuario', nullable: true })
  @IsInt()
  innUserId: number | null

  @Column('int', { name: 'texto_destacados', nullable: true })
  @IsInt()
  featuredText: number | null

  @Column('enum', {
    name: 'tipo_estancia',
    enum: StayType,
    nullable: true,
    default: () => StayType.ROOM
  })
  @IsEnum(StayType)
  accommodationType: StayType | null

  @Column('tinyint', { name: 'InstruccionAccesoQR', nullable: true, default: () => 0 })
  @IsBoolean()
  accessIntructionQr: boolean | null

  @OneToMany(() => SpaceEntity, (space) => space.spaceSubType)
  spaces?: SpaceEntity[]

  @OneToMany(() => MinimumStayEntity, (minimumStay) => minimumStay.spaceSubType)
  minimumStays?: MinimumStayEntity[]

  @ManyToOne(() => SpaceTypeEntity, (spaceType) => spaceType.spaceSubTypes)
  @JoinColumn({ name: 'idTipoEspacio', referencedColumnName: 'id' })
  spaceType: SpaceTypeEntity

  @OneToMany(() => ReservationEntity, reservation => reservation.spaceSubType)
  reservations: ReservationEntity[]
}
