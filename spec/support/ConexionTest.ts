import { createConnection, getConnection } from "typeorm"

export const conexion = {
    async iniciarAvi(dropSchema: boolean = false) {
        return await createConnection({
            name: 'default',
            type: 'mysql',
            host: "192.168.2.5",
            port: 3306,
            username: 'Developer',
            password: 'a"·gvfGefvx4',
            database: "AviratoAcceso",
            entities: [
                __dirname + '/src/**/*.entity.ts',
                '/src/**/*.entity.ts'
            ]
        });
    },
    async iniciarMamp(dropSchema: boolean = false) {
        return await createConnection({
            name: 'default',
            type: 'mysql',
            host: "localhost",
            port: 8889,
            username: 'root',
            password: 'root',
            database: 'agenda',
            entities: [
                __dirname + '/src/**/*.entity.ts',
                './src/**/entities/*.{ts,js}'
            ]
        });
    },

    async cerrar() {
        await getConnection().close()
    },
    async limpiar() {
        const conexion = getConnection()
        const entidades = conexion.entityMetadatas

        entidades.forEach(async (entidad) => {
            const repositorio = conexion.getRepository(entidad.name)
            await repositorio.query(`DELETE FROM ${entidad.name}`)
        })
    }
}



/*import { BaseService } from '../../src/core/BaseService'
export class HelperConexion extends BaseService {


}*/