import { ApiHideProperty, ApiProperty } from '@nestjs/swagger'
import { Exclude, Transform } from 'class-transformer'
import { IsBoolean, IsInt, IsISO8601, IsString } from 'class-validator'
import { BaseEntity } from '../../../../core/BaseEntity'
//import { BaseEntity } from 'core/BaseEntity'
//import { UserPermissionEntity } from 'modules/main/User/entities/UserPermission.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { ContractOrigin } from '../@types'

@Entity({ name: 'Accesos' })
export class AccessEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'idHotel' })
  @ApiHideProperty()
  @Exclude()
  hotelId: number

  @Column('int', { name: 'codigoWeb' })
  @IsInt()
  webCode: number

  @Column('varchar', { name: 'establecimiento', nullable: true, length: 250 })
  @IsString()
  business: string | null

  @Column('varchar', { name: 'host', nullable: true, length: 250 })
  @IsString()
  @ApiHideProperty()
  @Exclude()
  dbHost: string | null

  @Column('varchar', { name: 'dbName', nullable: true, length: 200 })
  @IsString()
  @ApiHideProperty()
  @Exclude()
  dbName: string | null

  @Column('varchar', { name: 'userBBDD', nullable: true, length: 200 })
  @IsString()
  @ApiHideProperty()
  @Exclude()
  dbUser: string | null

  @Column('varchar', { name: 'passBBDD', nullable: true, length: 200 })
  @IsString()
  @ApiHideProperty()
  @Exclude()
  dbPass: string | null

  @Column('varchar', { name: 'responsable', nullable: true, length: 250 })
  @IsString()
  responsable: string | null

  @Column('varchar', { name: 'telefono', nullable: true, length: 90 })
  @IsString()
  phone: string | null

  @Column('varchar', { name: 'movil', nullable: true, length: 90 })
  @IsString()
  mobile: string | null

  @Column('varchar', { name: 'mail', nullable: true, length: 255 })
  @IsString()
  email: string | null

  @Column('varchar', { name: 'web', nullable: true, length: 255 })
  @IsString()
  website: string | null

  @Column('varchar', { name: 'direccion', nullable: true, length: 255 })
  @IsString()
  address: string | null

  @Column('varchar', { name: 'ciudad', nullable: true, length: 250 })
  @IsString()
  city: string | null

  @Column('varchar', { name: 'cp', nullable: true, length: 25 })
  @IsString()
  zipCode: string | null

  @Column('varchar', { name: 'estado', nullable: true, length: 75 })
  @IsString()
  state: string | null

  @Column('varchar', { name: 'pais', nullable: true, length: 90 })
  @IsString()
  country: string | null

  @Column('tinyint', { name: 'bloqueado', nullable: true, default: () => 0 })
  @IsBoolean()
  isLock: boolean

  // 0: Free - 1: Premium - 2: Scholar
  @Column('tinyint', { name: 'clienteDePago', nullable: true, default: () => 0 })
  @IsInt()
  suscription: boolean

  @Column('tinyint', { name: 'unidadesAlojativas', nullable: true, default: () => 0 })
  @IsBoolean()
  units: boolean

  @Column('tinyint', { name: 'motorReservas', nullable: true, default: () => 0 })
  @IsBoolean()
  booking: boolean

  @Column('tinyint', { name: 'channelManager', nullable: true, default: () => 0 })
  @IsBoolean()
  channel: boolean

  @Column('tinyint', { name: 'tiendaOnline', nullable: true, default: () => 0 })
  @IsBoolean()
  shop: boolean

  @Column('tinyint', { name: 'editorPlantillas', nullable: true, default: () => 0 })
  @IsBoolean()
  templates: boolean

  @Column('tinyint', { name: 'mailing', nullable: true, default: () => 0 })
  @IsBoolean()
  mailing: boolean

  @Column('timestamp', { name: 'fechaAlta', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  @IsISO8601()
  @ApiProperty({ type: 'date-time' })
  createdAt: Date

  @Column('timestamp', { name: 'ultimoAcceso', nullable: true })
  @IsISO8601()
  @ApiProperty({ type: 'date-time' })
  lastAccessAt: Date

  @Column('int', { name: 'intentosFallidos', nullable: true, default: () => 0 })
  @IsInt()
  @ApiHideProperty() //Lo oculto porque me parece una vulnerabilidad facilitar esta información
  @Exclude()
  failedAttempts: number | null

  @Column('timestamp', { name: 'tiempoBloqueo', nullable: true })
  @IsISO8601()
  @ApiProperty({ type: 'date-time' })
  lockTime: Date | null

  @Column('varchar', { name: 'procedencia', nullable: true, length: 45 })
  @IsString()
  source: string | null

  @Column('enum', {
    name: 'Origen',
    nullable: true,
    enum: ContractOrigin
  })
  @IsString()
  @Transform(({ value }) => ContractOrigin['' + value])
  origin: ContractOrigin

  @Column('int', { name: 'distribuidor', nullable: true, default: () => '0' })
  @IsInt()
  dealer: number | null
/*
  @OneToMany(() => UserPermissionEntity, (permissions) => permissions.hotel)
  @ApiHideProperty()
  permissions: UserPermissionEntity*/
}
