import { ApiHideProperty, ApiProperty } from '@nestjs/swagger'
import { Exclude, Transform } from 'class-transformer'
import { IsBoolean, IsEnum, IsInt, IsISO8601, IsNumber, IsString } from 'class-validator'
import { BaseEntity } from 'core/BaseEntity'
import { SpaceSubTypeEntity } from 'modules/tenant/Space/entities/SpaceSubType.entity'
import { AfterLoad, Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { DateUtils } from 'utils/dates'
import { ReservationDiets, ReservationStatus } from '../@types'

@Index(
  'ReservaMaestra',
  ['id', 'masterReservationId', 'operatorReservationId', 'hotelId'],
  {}
)
@Index('DispoFechas', ['status', 'checkInDate', 'checkOutDate', 'hotelId'], {})
@Index(
  'DispoReserva',
  ['spaceSubTypeId', 'checkInDate', 'checkOutDate', 'status', 'hotelId'],
  {}
)
@Entity({ name: 'reservas' })
export class ReservationEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'idreservas' })
  @IsInt()
  id?: number

  @Column('int', { name: 'idhotel', select: false })
  @IsInt()
  @ApiHideProperty()
  @Exclude()
  hotelId: number

  @Column('varchar', { name: 'codigoPromocional', nullable: true, length: 45 })
  @IsString()
  promotionalCode?: string | null

  @Column('varchar', { name: 'paqueteVacacional', nullable: true, length: 45 })
  @IsString()
  promotionalPackage?: string | null

  @Column('int', { name: 'idEspacio' })
  @IsInt()
  spaceId: number

  @Column('int', { name: 'idSubtipoEspacio', nullable: true })
  @IsInt()
  spaceSubTypeId: number | null

  @Column('int', { name: 'idTipoEspacio', nullable: true })
  @IsInt()
  spaceTypeId: number | null

  @Column('varchar', { name: 'idCliente', nullable: true, length: 45 })
  @IsString()
  clientId: string | null

  @Column('varchar', { name: 'nombreCliente', nullable: true, length: 150 })
  @IsString()
  clientName: string | null

  @Column({
    name: 'estado',
    type: 'enum',
    enum: ReservationStatus,
    default: ReservationStatus.RESERVATION,
    nullable: true,
  })
  @IsEnum(ReservationStatus)
  @Transform(({ value }) => ReservationStatus['' + value])
  status: ReservationStatus | null

  @Column('timestamp', { name: 'fechaEntrada', nullable: true })
  @IsISO8601()
  @ApiProperty({ type: 'date-time' })
  checkInDate: Date | null

  @Column('timestamp', { name: 'fechaSalida', nullable: true })
  @IsISO8601()
  @ApiProperty({ type: 'date-time' })
  checkOutDate: Date | null

  @Column({
    name: 'regimen',
    type: 'enum',
    enum: ReservationDiets,
    default: ReservationDiets.BB,
    nullable: true,
  })
  @IsEnum(ReservationDiets)
  diet: ReservationDiets | null

  @Column('int', { name: 'adultos', nullable: true, default: () => 1 })
  @IsInt()
  adults: number | null

  @Column('int', { name: 'ninos', nullable: true, default: () => 0 })
  @IsInt()
  children?: number | null

  @Column('int', { name: 'camasAdicionales', nullable: true, default: () => 0 })
  @IsInt()
  additionalBeds?: number | null

  @Column('int', { name: 'tarifa', nullable: true, default: () => 0 })
  @IsInt()
  rateId: number | null

  @Column('double', { name: 'costeHabitacion', nullable: true, default: () => 0 })
  @IsNumber()
  price: number | null

  @Column('double', { name: 'anticipo', nullable: true, precision: 22, default: () => 0 })
  @IsNumber()
  advance?: number | null

  @Column('int', { name: 'tipoAnticipo', nullable: true, default: () => 0 })
  @IsInt()
  advanceType?: number | null

  @Column('tinyint', { name: 'pagado', nullable: true, default: () => 0 })
  @IsBoolean()
  isPaid?: boolean | null

  @Column('mediumtext', { name: 'observaciones', nullable: true })
  @IsString()
  observations?: string | null

  @Column('int', { name: 'idOperador', nullable: true, default: () => 0 })
  @IsInt()
  operatorId?: number | null

  @Column('varchar', { name: 'idReservaOperador', nullable: true, length: 45, default: () => "''" })
  @IsString()
  operatorReservationId?: string | null

  @Column('int', { name: 'idReservaMaestra', nullable: true, default: () => 0 })
  @IsInt()
  masterReservationId?: number | null

  // @Column('int', { name: 'idReservaEnlazada', nullable: true, default: () => 0 })
  // @IsInt()
  // linkedReservationId?: number | null;

  @Column('varchar', { name: 'color', nullable: true, length: 7 })
  @IsString()
  color?: string | null

  @Column('tinyint', { name: 'mensaje', nullable: true, default: () => 0 })
  @IsBoolean()
  hasMenssage?: boolean | null

  @Column('timestamp', { name: 'fechaReserva', default: () => 'CURRENT_TIMESTAMP' })
  @IsISO8601()
  @ApiProperty({ type: 'date-time' })
  createdAt?: Date

  @Column('timestamp', { name: 'fechaUpdate', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  @IsISO8601()
  @ApiProperty({ type: 'date-time' })
  updatedAt?: Date | null

  @ManyToOne(() => ReservationEntity, reservation => reservation.relatedReservations)
  @JoinColumn({ name: 'idReservaMaestra' })
  masterReservation: ReservationEntity

  @OneToMany(() => ReservationEntity, reservation => reservation.masterReservation)
  relatedReservations: ReservationEntity[]

  @ManyToOne(() => SpaceSubTypeEntity, spaceSubType => spaceSubType.reservations)
  @JoinColumn({ name: 'idSubtipoEspacio' })
  spaceSubType: SpaceSubTypeEntity

  @AfterLoad()
  setCheckOutLocks () {
    if (!this.spaceSubType) {
      return
    }

    this.checkInDate = DateUtils.addDays(this.checkInDate, -this.spaceSubType.lockPeriods)
    this.checkOutDate = DateUtils.addDays(this.checkOutDate, this.spaceSubType.lockPeriods)
  }

  // @ManyToOne(() => ReservationEntity, reservation => reservation.linkedReservations)
  // @JoinColumn({ name: 'idReservaEnlazada' })
  // mainReservation: ReservationEntity;

  // @OneToMany(() => ReservationEntity, reservation => reservation.mainReservation)
  // linkedReservations: ReservationEntity[];
}
