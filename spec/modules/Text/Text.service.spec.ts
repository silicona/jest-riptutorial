import { Connection } from 'typeorm';
import { LanguagesEntity } from '../../../src/modules/mailing/Campaign/entities/Languages.entity';
import { LanguageTextEntity } from '../../../src/modules/mailing/Campaign/entities/LanguageText.entity';
import { TextService } from '../../../src/modules/tenant/Text/services/Text.service'
import { conexion } from '../../support/ConexionTest';

describe("Suite de Text Service", () => {

    var conn: Connection;
    var serv: TextService;
    var hotelId: number = 1

    beforeAll(async () => {
        conn = await conexion.iniciarAviPMS()
        serv = new TextService()
        serv['connection'] = conn
    });

    afterAll(async () => {
        await conexion.cerrar()
    });

    it("fecthLanguages", async () => {
        var res = await serv['fetchLanguages'](hotelId)

        expect(res).toBeInstanceOf(LanguagesEntity)
        expect(res['1']).toBe('FR')
        expect(res.hotelId).toBe(hotelId)
    })

    it("fecthLanguages KO", async () => {
        var res = await serv['fetchLanguages'](null)

        expect(res).toBe(undefined)
    })

    it("fecthTextsById", async () => {
        var id = 207927956       
        var res = await serv['fetchTextsById'](id)
        
        expect(res).toBeInstanceOf(Array)
        
        var texto = res[0]
        expect(texto).toBeInstanceOf(LanguageTextEntity)
    })
    
    it("getTextsById", async () => {
        var res = await serv.getTextsById(1, 1)
        //console.log(res)
        expect(res).toBeInstanceOf(Array)
        expect(res.textId).toBeGreaterThan(0)
    })
})