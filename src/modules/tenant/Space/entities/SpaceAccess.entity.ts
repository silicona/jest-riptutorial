import { IsInt, IsString } from 'class-validator'
import { BaseEntity } from 'core/BaseEntity'
import { Column, Entity } from 'typeorm'

@Entity('espaciosAcceso')
export class SpacesAccessEntity extends BaseEntity {
  @Column('int', { primary: true, name: 'idEspacio' })
  @IsInt()
  spaceId: number

  @Column('int', { name: 'idCerradura', nullable: true })
  @IsInt()
  lockId: number | null

  @Column('varchar', { name: 'nombreCerradura', nullable: true, length: 45 })
  @IsString()
  lockName: string | null

  @Column('int', { name: 'idhotel', select: false })
  @IsInt()
  hotelId: number

  @Column('int', { name: 'type', nullable: true, comment: '0 tesa, 1 omnitec', default: () => 0 })
  @IsInt()
  type: number | null
}
