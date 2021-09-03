import { IsInt, IsString } from 'class-validator'
import { BaseEntity } from 'core/BaseEntity'
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'

@Index('id_UNIQUE', ['id'], { unique: true })
@Index('idEspacio_UNIQUE', ['spaceId'], { unique: true })
@Entity('EspaciosDatosModelo179')
export class SpaceDataModel179Entity extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  @IsInt()
  id: number

  @Column('int', { primary: true, name: 'idEspacio' })
  @IsInt()
  spaceId: number

  @Column('int', { name: 'CodigoMunicipio' })
  @IsInt()
  municipalCode: number

  @Column('varchar', { name: 'CodigoProvincia', length: 5 })
  @IsString()
  stateCode: string

  @Column('varchar', { name: 'TipoVia', length: 55 })
  @IsString()
  roadType: string

  @Column('varchar', { name: 'NombreVia', nullable: true, length: 255, default: () => '' })
  @IsString()
  roadName: string | null

  @Column('varchar', { name: 'TipoNumeracion', length: 3 })
  @IsString()
  numerationType: string

  @Column('int', { name: 'idHotel', nullable: true, select: false })
  @IsInt()
  hotelId: number | null
}
