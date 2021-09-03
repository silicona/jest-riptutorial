import { IsInt } from 'class-validator'
import { BaseEntity } from 'core/BaseEntity'
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'

@Index('servicioszona', ['zoneId'], {})
@Index('serviciosicono', ['serviceId'], {})
@Entity('espaciosSubtipoZonaServicios')
export class SpaceSubTypeZoneServicesEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  @IsInt()
  id: number

  @Column('int', { name: 'idZona' })
  @IsInt()
  zoneId: number

  @Column('int', { name: 'idServicio' })
  @IsInt()
  serviceId: number
}
