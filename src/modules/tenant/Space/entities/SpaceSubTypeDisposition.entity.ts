import { IsInt } from 'class-validator'
import { BaseEntity } from 'core/BaseEntity'
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'

@Index('idSubtipoEspacio_UNIQUE', ['spaceSubTypeId'], { unique: true })
@Entity('espaciosSubtipoDisposicion')
export class SpaceSubTypeDispositionEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  @IsInt()
  id: number

  @Column('int', { name: 'idSubtipoEspacio', unique: true })
  @IsInt()
  spaceSubTypeId: number

  @Column('int', { name: 'habitaciones', nullable: true, default: () => 0 })
  @IsInt()
  rooms: number | null

  @Column('int', { name: 'camaMatrimonio', nullable: true, default: () => 0 })
  @IsInt()
  twinBed: number | null

  @Column('int', { name: 'camaIndividual', nullable: true, default: () => 0 })
  @IsInt()
  singleBed: number | null

  @Column('int', { name: 'banioPrivado', nullable: true, default: () => 0 })
  @IsInt()
  privateBathroom: number | null

  @Column('int', { name: 'aseo', nullable: true, default: () => 0 })
  @IsInt()
  toilet: number | null

  @Column('int', { name: 'metros_cuadrados', nullable: true, default: () => 0 })
  @IsInt()
  squareMeters: number | null

  @Column('int', { name: 'sofa_cama', nullable: true, default: () => 0 })
  @IsInt()
  sofaBed: number | null
}
