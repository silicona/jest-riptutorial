import { Injectable } from '@nestjs/common'
import { BaseTenantService } from 'core/BaseTenantService'
import { ReservationEntity } from 'modules/tenant/Reservation/entities/Reservation.entity'
import { SpaceEntity } from 'modules/tenant/Space/entities/Space.entity'
import { SpaceTypeEntity } from 'modules/tenant/SpaceType/entities/SpaceTypes.entity'
import { SyncField, SyncUpdateableValues } from '../@types'
import { SyncEntity } from '../entities/Sync.entity'

@Injectable()
export class SyncService extends BaseTenantService {

  public updateSynchronization = async (hotelId: number, updateData: any) => await (await this.makeQB(SyncEntity, 's'))
    .update()
    .set(updateData ? updateData.update : { estadoHabitaciones: () => "" + ~~(Math.random() * 1000000) })
    .where('idhotel = :hotelId', { hotelId })
    .execute()
  private randomize = (size = 6) => ~~(Math.random() * Math.pow(10, size))
  public get = async (hotelId: number): Promise<SyncEntity> => await (await this.makeQB<SyncEntity>(SyncEntity, 's'))
    .where('s.hotelId = :hotelId', { hotelId })
    .getOne()

  async put(hotelId: number, fields: SyncField | SyncField[]): Promise<void> {
    if (!Array.isArray(fields)) fields = [fields]
    const toUpdate = fields.reduce((acc, field) => {
      if (!(field in SyncUpdateableValues)) return acc
      const type = SyncUpdateableValues[field]
      acc[field] = type === 'date' ? new Date() : this.randomize(type)
      return acc
    }, {})
    await (await this.makeQB<SyncEntity>(SyncEntity, 's'))
      .update(SyncEntity)
      .set(toUpdate)
      .where('hotelId = :hotelId', { hotelId })
      .execute()
  }

  // private setDirtyRooms = async (hotelId: number, spacesIds: Array<number>) => await (await this.makeQB(SpaceEntity, 'e'))
  //   .innerJoin(SpaceTypesEntity, 'et', 'et.idTipoEspacio = e.idTipoEspacio and et.idHotel = e.idhotel and et.Alojamiento = 1')
  //   .where("idEspacio in (:...spacesIds)", { spacesIds })
  //   .andWhere('e.idhotel = :hotelId', { hotelId })
  //   .update()
  //   .set({ estado: () => 'Sucia' })
  //   .execute()

  // private getDirtyRooms = async (hotelId: number, actualDay) => await (await this.makeQB(ReservationEntity, 'r'))
  //   .select('idEspacio', 'spacesId')
  //   .where("estado = 'Check In'")
  //   .andWhere('idhotel = :hotelId', { hotelId })
  //   .andWhere('DATE(fechaEntrada) <= DATE(:actualDay)', { actualDay })
  //   .andWhere('DATE(fechaSalida) >= DATE(:actualDay)', { actualDay })
  //   .getMany()
}