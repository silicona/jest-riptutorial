import { IsInt } from 'class-validator'
import { BaseEntity } from 'core/BaseEntity'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('espaciosSubtipoImagenes')
export class SpaceSubTypeImagesEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'idImagen' })
  @IsInt()
  imgId: number

  @Column('int', { name: 'idSubtipoEspacio' })
  @IsInt()
  spaceSubTypeId: number

  @Column('int', { name: 'orden', nullable: true, default: () => "'0'" })
  @IsInt()
  order: number | null

  @Column('int', { name: 'idHotel', nullable: true, select: false })
  @IsInt()
  hotelId: number | null
}
