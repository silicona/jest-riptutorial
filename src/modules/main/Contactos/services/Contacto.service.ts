import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "core/BaseService";
import { Connection, Repository } from "typeorm";
import { ContactoEntity } from "../entities/Contacto.entity";

@Injectable()
export class ContactoService extends BaseService {

    public constructor(connection: Connection) {
        super(connection)
    }

    public getContactos = async () => await (await this.makeQB(ContactoEntity, 'c'))
        .select()
        .getMany()
}