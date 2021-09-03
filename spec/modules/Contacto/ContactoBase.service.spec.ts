import { Connection } from "typeorm"
import { ContactoEntity } from "../../../src/modules/main/Contactos/entities/Contacto.entity";
import { ContactoBaseService } from '../../../src/modules/main/Contactos/services/ContactoBase.service'
import { conexion } from "../../support/ConexionTest";

describe("Suite de Contacto Base Service", () => {

    var conn: Connection;
    var serv: ContactoBaseService;
    beforeAll(async () => {
        conn = await conexion.iniciarMamp()
        serv = new ContactoBaseService(conn)
    });

    afterAll(async () => {
        await conexion.cerrar()
    })

    it("GetContactos", async () => {
        var contactos = await serv.getContactos()

        expect(contactos).toBeInstanceOf(Array)
        expect(contactos[0]).toBeInstanceOf(ContactoEntity)
    })
})