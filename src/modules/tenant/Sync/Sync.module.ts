import { Module } from '@nestjs/common'
import { SyncController } from './controllers/Sync.controller'
import { SyncService } from './services/Sync.service'

@Module({
  providers: [SyncService],
  controllers: [SyncController]
})
export class SyncModule {}
