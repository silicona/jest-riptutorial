import { IncrementType } from '@types'
import { IsInt } from 'class-validator'
import { BaseEntity } from 'core/BaseEntity'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('espaciosUpselling')
export class SpaceUpsellingEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  @IsInt()
  id: number

  @Column('int', { name: 'idSubtipoEspacio', nullable: true })
  @IsInt()
  spaceSubTypeId: number

  @Column('int', { name: 'idSubtipoEspacioMejora', nullable: true })
  @IsInt()
  spaceSubTypeIdUpselling: number

  @Column({
    name: 'tipoIncremento',
    type: 'enum',
    enum: IncrementType,
    default: IncrementType.PCT
  })
  incrementType: IncrementType

  @Column('int', { name: 'incremento' })
  increment: number
}
