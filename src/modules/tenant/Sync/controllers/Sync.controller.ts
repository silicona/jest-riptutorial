import { ClassSerializerInterceptor, Controller, Get, UseInterceptors } from '@nestjs/common'
import { ApiOkResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger'
import { classToClass } from 'class-transformer'
import { BaseController } from 'core/BaseController'
import { EventEmitter2 } from 'eventemitter2'
import { Local } from 'utils/decorators/local.decorator'
import { SyncEntity } from '../entities/Sync.entity'
import { SyncService } from '../services/Sync.service'

@ApiTags('sync')
@Controller('sync')
export class SyncController extends BaseController {

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  @ApiOkResponse({
    description: 'Provides current sync values',
    type: classToClass(SyncEntity),
  })
  @ApiUnauthorizedResponse()
  async get(@Local('hotelId') hotelId: number): Promise<SyncEntity> {
    return this.syncService.get(hotelId)
  }
}
