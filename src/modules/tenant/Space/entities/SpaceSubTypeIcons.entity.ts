import { IsInt } from 'class-validator'
import { BaseEntity } from 'core/BaseEntity'
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'

@Index('idTipoIc_idx', ['spaceSubTypeId'], {})
@Entity('espaciosSubtipoIconos')
export class SpaceSubTypeIconsEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  @IsInt()
  id: number

  @Column('int', { name: 'idSubtipoEspacio' })
  @IsInt()
  spaceSubTypeId: number

  @Column('int', { name: 'idIcono', nullable: true })
  @IsInt()
  iconId: number | null
}
