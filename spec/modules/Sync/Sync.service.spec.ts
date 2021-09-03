import { conexion } from "../../support/ConexionTest"
import { SyncService } from "../../../src/modules/tenant/Sync/services/Sync.service"
import { SyncEntity } from "../../../src/modules/tenant/Sync/entities/Sync.entity";
import { iniController } from "../../support/Ini.helper";
import { AccessService } from "../../../src/modules/main/Access/services/Access.service";
//import { AccessEntity } from "../../../src/modules/main/Access/entities/Access.entity";

describe("SyncService", () => {

    var conn;
    var serv;
    var hotelId: number = 1
    var webCode: number = 8392837

    beforeAll(async () => {
        conn = await conexion.iniciarAviPMS()
        serv = new SyncService();
        serv['connection'] = conn
        serv['accessService'] = AccessService;
    })

    afterAll(async () => {
        await conexion.cerrar()
    })

    it("Get", async () => {
        console.log(jest)
        var sync = await serv.get(hotelId)
       
        expect(sync).toBeInstanceOf(SyncEntity)
        expect(sync.hotelId).toBe(hotelId)
    })
    
})