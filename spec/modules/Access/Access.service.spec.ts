import { conexion } from "../../support/ConexionTest"
import { AccessService } from "../../../src/modules/main/Access/services/Access.service"
import { Connection, Repository } from "typeorm";
import { AccessEntity } from "../../../src/modules/main/Access/entities/Access.entity";

describe("Probando", () => {

    var con;
    var servicio;
    beforeAll(async () => {

        con = await conexion.iniciarAvi()
        servicio = new AccessService(con.getRepository(AccessEntity));
    })

    afterAll(async () => {
        await conexion.cerrar()
    })

    //var con = conexion
    it("It", async () => {
        var hotel = await servicio.getHotel(1)
        
        expect(hotel).toBe(true)
    })
})