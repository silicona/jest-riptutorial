import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ContactoEntity } from "../entities/Contacto.entity";

@Injectable()
export class ContactoBaseService {
    constructor(
        @InjectRepository(ContactoEntity)
        private repository: Repository<ContactoEntity>
    ) { }

    async getContactos(): Promise<ContactoEntity[]> {
        return this.repository.createQueryBuilder('a')
            .select()
            .getMany()
    }

}