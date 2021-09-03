import { AccessService } from "../../../src/modules/main/Access/services/Access.service";
import { SyncController } from "../../../src/modules/tenant/Sync/controllers/Sync.controller"
import { SyncEntity } from "../../../src/modules/tenant/Sync/entities/Sync.entity";


describe("SyncController", () => {

    var conn;
    var cont;
    var hotelId: number = 1
    var webCode: number = 8392837

    beforeAll(async () => {
        //conn = await conexion.iniciarAviPMS()
        cont = new SyncController();
        cont['accessService'] = AccessService;

        //serv['connection'] = conn
    })

    afterAll(async () => {
        //await conexion.cerrar()
    })

    it("Get", async () => {
        
        var sync = await cont.get(hotelId)
       
        expect(sync).toBeInstanceOf(SyncEntity)
        expect(sync.hotelId).toBe(hotelId)
    })
    
})