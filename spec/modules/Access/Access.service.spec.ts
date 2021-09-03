import { conexion } from "../../support/ConexionTest"
import { AccessService } from "../../../src/modules/main/Access/services/Access.service"
import { AccessEntity } from "../../../src/modules/main/Access/entities/Access.entity";

describe("Probando", () => {

    var con;
    var servicio;
    var hotelId: number = 1
    var webCode: number = 8392837
    beforeAll(async () => {
        con = await conexion.iniciarAviAcceso()
        servicio = new AccessService(con.getRepository(AccessEntity));
    })

    afterAll(async () => {
        await conexion.cerrar()
    })

    it("GetHotels", async () => {
        var hotels = await servicio.getHotels([hotelId])

        expect(hotels).toBeInstanceOf(Array)

        var hotel = hotels[0]
        expect(hotel).toBeInstanceOf(AccessEntity)
        expect(hotel.hotelId).toBe(hotelId)
    })

    it("GetHotel", async () => {
        var hotel = await servicio.getHotel(hotelId)

        expect(hotel).toBeInstanceOf(AccessEntity)
        expect(hotel.hotelId).toBe(hotelId)
    })

    it("getHotelsByWebCodes", async () => {
        var hotels = await servicio.getHotelsByWebCodes([webCode])

        expect(hotels).toBeInstanceOf(Array)

        var hotel = hotels[0]
        expect(hotel).toBeInstanceOf(AccessEntity)
        expect(hotel.hotelId).toBe(hotelId)
    })

    it("GetHotelByWebCode", async () => {
        var hotel = await servicio.getHotelByWebCode(webCode)

        expect(hotel).toBeInstanceOf(AccessEntity)
        expect(hotel.hotelId).toBe(hotelId)
    })
})