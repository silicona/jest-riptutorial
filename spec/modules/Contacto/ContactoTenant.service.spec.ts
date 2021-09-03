import { Connection } from "typeorm";
import { ContactoEntity } from "../../../src/modules/main/Contactos/entities/Contacto.entity";
import { ContactoTenantService } from '../../../src/modules/main/Contactos/services/ContactoTenant.service'
import { conexion } from "../../support/ConexionTest";

describe("Suite de Contacto Tenant Service", () => {

    var conn: Connection;
    var serv: ContactoTenantService;
    beforeAll(async () => {
        conn = await conexion.iniciarMamp()
        serv = new ContactoTenantService()
        serv['connection'] = conn
    });

    afterAll(async () => {
        await conexion.cerrar()
    })

    it("GetContactos", async () => {
        var contactos = await serv.getContactos()
        console.log(contactos)
        expect(contactos).toBeInstanceOf(Array)
        expect(contactos[0]).toBeInstanceOf(ContactoEntity)
    })
})