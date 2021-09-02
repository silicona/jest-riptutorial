import { Connection } from 'typeorm';
import { TextService } from '../../../src/modules/main/Text/services/Text.service'
import { conexion } from '../../support/ConexionTest';

describe("Suite de Text Service", () => {

    var conn: Connection;
    var serv: TextService;

    beforeAll(async () => {
        conn = await conexion.iniciarAviPMS()
        serv = new TextService(conn)
    });

    afterAll(async () => {
        await conexion.cerrar()
    });

    it("fecthTextsById", async () => {
        var h = await serv['fetchTextsById'](1)
        // var h = await serv.getTextsById(1, 3)
        //'3', '207927956', '1', 'piscina,playa'

        expect(h).toBeInstanceOf(String)
    })
})