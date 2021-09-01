import { conexion } from "../../support/HelperConexion"
import { AccessService } from "../../../src/modules/main/Access/services/Access.service"
import { Repository } from "typeorm";
import { AccessEntity } from "../../../src/modules/main/Access/entities/Access.entity";

describe("Probando", () => {

    var con = conexion;
    var servicio;
    beforeAll(async () => {

        console.log(await con.iniciar())
        servicio = new AccessService(new Repository<AccessEntity>());
    })

    afterAll(async () => {
        await con.cerrar()
    })

    //var con = conexion
    it("It", async () => {
        var hotel = await servicio.getHotel(1)
        
        expect(hotel).toBe(true)
    })
})