import { Connection } from "typeorm"
import { ContactoEntity } from "../../../src/modules/main/Contactos/entities/Contacto.entity";
import { ContactoService } from '../../../src/modules/main/Contactos/services/Contacto.service'
import { conexion } from "../../support/ConexionTest";

describe("Suite de Contacto Service", () => {

    var conn: Connection;
    var serv: ContactoService;
    beforeAll(async () => {
        conn = await conexion.iniciarMamp()
        serv = new ContactoService(conn)
    });

    afterAll(async () => {
        await conexion.cerrar()
    })

    it("GetContactos", async () => {
        //console.log(conn.getRepository(ContactoEntity))
        var contactos = await serv.getContactos()

        expect(contactos).toBeInstanceOf(Array)
        expect(contactos[0]).toBeInstanceOf(ContactoEntity)
    })
})