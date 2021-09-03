import { ApiHideProperty } from '@nestjs/swagger'
import { Exclude } from 'class-transformer'
import { IsBoolean, IsInstance, IsInt, IsString } from 'class-validator'
import { BaseEntity } from 'core/BaseEntity'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('espaciosSubtipoZonas')
export class SpaceSubTypeZonesEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'idResidencial' })
  @IsInt()
  id: number

  @Column('int', { name: 'idhotel', nullable: true, select: false })
  @IsInt()
  @ApiHideProperty()
  @Exclude()
  hotelId: number | null

  @Column('varchar', { name: 'nombre', nullable: true, length: 45 })
  @IsString()
  name: string | null

  @Column('varchar', { name: 'pais', nullable: true, length: 45 })
  @IsString()
  @Exclude()
  country: string | null

  @Column('varchar', { name: 'zona', nullable: true, length: 45 })
  @IsString()
  @Exclude()
  zone: string | null

  @Column('int', { name: 'desactivado', nullable: true })
  @IsInt()
  disabled: number | null

  @Column('tinyint', { name: 'mostrarEnMotor', nullable: true, default: () => 0 })
  @IsBoolean()
  showInEngine: boolean | null

  @Column('mediumtext', { name: 'descripcion_corta', nullable: true })
  @IsString()
  @Exclude()
  shortDescription: string | null

  @Column('longtext', { name: 'descripcion_larga', nullable: true })
  @IsString()
  longDescription: string | null

  @Column('tinyint', { name: 'is_coordenadas', nullable: true, default: () => 0 })
  @IsBoolean()
  isCoordinates: boolean | null

  @Column('text', { name: 'direccion', nullable: true })
  @IsString()
  address: string | null

  @Column('varchar', { name: 'coordenadax', nullable: true, length: 45 })
  @IsString()
  coordinatesX: string | null

  @Column('varchar', { name: 'coordenaday', nullable: true, length: 45 })
  @IsString()
  coordinatesY: string | null

  @Column('longblob', { name: 'foto', nullable: true })
  @IsInstance(Buffer)
  photo: Buffer | null

  @Column('int', { name: 'prioridad', nullable: true })
  @IsInt()
  priority: number | null

  @Column('int', { name: 'id_agrupacion', nullable: true, default: () => 0 })
  @IsInt()
  groupId: number | null

  @Column('int', { name: 'id_tipo_Espacio', default: () => 0 })
  @IsInt()
  spaceTypeId : number | null

  @Column('varchar', { name: 'cname', nullable: true, length: 60, default: () => 'bookin.avirato.com' })
  @IsString()
  cname: string | null
}
