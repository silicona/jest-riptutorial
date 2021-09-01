import { BaseEntity } from "core/BaseEntity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('contactos')
export class ContactoEntity extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'int', name: 'idContacto' })
    id: number

    @Column('varchar', { name: 'nombre' })
    name: string

    @Column('varchar', { name: 'email' })
    email: string
    
    @Column('int', { name: 'telefono' })
    phone: number
}