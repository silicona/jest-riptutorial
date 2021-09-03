import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { AccessEntity } from '../entities/Access.entity'

@Injectable()
export class AccessService {
  constructor(
    @InjectRepository(AccessEntity)
    private repository: Repository<AccessEntity>
  ) {}

  async getHotels (hotelIds: number[]): Promise<AccessEntity[]> {
    return this.repository.createQueryBuilder('a')
      .select()
      .whereInIds(hotelIds)
      .getMany()
  }

  async getHotel (hotelId: number): Promise<AccessEntity> {
    return this.repository.createQueryBuilder('a')
      .select()
      .where('a.hotelId = :hotelId', { hotelId })
      .getOne()
  }

  async getHotelsByWebCodes (webCodes: number[]): Promise<AccessEntity[]> {
    return this.repository.createQueryBuilder('a')
    .select()
    //.whereInIds(webCodes)
    .where('codigoWeb IN (:...webCodes)', { webCodes })
    .getMany()
  }

  async getHotelByWebCode (webCode: number): Promise<AccessEntity> {
    return this.repository.createQueryBuilder('a')
    .select()
    .where('a.webCode', {webCode})
    .getOne()
  }

}
