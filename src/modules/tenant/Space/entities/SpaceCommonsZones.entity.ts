import { IsInt, IsNumber, IsString } from 'class-validator'
import { BaseEntity } from 'core/BaseEntity'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('espaciosZonasComunes')
export class SpaceCommonsZonesEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  @IsInt()
  id: number

  @Column('int', { primary: true, name: 'idHotel', select: false })
  @IsInt()
  hotelId: number

  @Column('varchar', { primary: true, name: 'nombre', length: 250 })
  @IsString()
  name: string

  @Column('int', { primary: true, name: 'estado' })
  @IsInt()
  status: number

  @Column('double', { name: 'tiempoLimpieza', nullable: true, precision: 22 })
  @IsNumber()
  cleaningTime: number | null
}
