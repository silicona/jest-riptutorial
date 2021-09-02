import { conexion } from "../../support/ConexionTest"
import { AccessService } from "../../../src/modules/main/Access/services/Access.service"
import { AccessEntity } from "../../../src/modules/main/Access/entities/Access.entity";

describe("Probando", () => {

    var con;
    var servicio;
    beforeAll(async () => {

        con = await conexion.iniciarAviAcceso()
        servicio = new AccessService(con.getRepository(AccessEntity));
    })

    afterAll(async () => {
        await conexion.cerrar()
    })

    it("It", async () => {
        var hotel = await servicio.getHotel(1)
        expect(hotel).toBeInstanceOf(AccessEntity)
    })
})