import { Injectable } from '@nestjs/common'
import { Connection, EntityTarget, QueryRunner } from 'typeorm'

@Injectable()
export class BaseService {
  private connection: Connection
  private queryRunner: QueryRunner

  constructor(
    connection?: Connection,
  ) {
    this.connection = connection
  }

  async makeQB<T = any> (entity: EntityTarget<any>, alias?: string, transacting = false) {
    if (transacting) {
      if (!this.queryRunner) {
        this.queryRunner = this.connection.createQueryRunner()
      }

      return this.connection.createQueryBuilder<T>(entity, alias, this.queryRunner)
    }

    return this.connection.createQueryBuilder<T>(entity, alias)
  }

  async startTrx () {
    if (this.queryRunner) {
      throw new Error('Already running transactions!')
    }

    this.queryRunner = this.connection.createQueryRunner()
    await this.queryRunner.connect()
    await this.queryRunner.startTransaction()
  }

  async commitTrx () {
    if (!this.queryRunner) {
      throw new Error('No running transactions!')
    }

    if (!this.queryRunner.isTransactionActive) {
      this.queryRunner = undefined
      throw new Error('No running transactions!')
    }

    this.queryRunner.commitTransaction()
  }

  async rollbackTrx () {
    if (!this.queryRunner) {
      throw new Error('No running transactions!')
    }

    if (!this.queryRunner.isTransactionActive) {
      this.queryRunner = undefined
      throw new Error('No running transactions!')
    }

    this.queryRunner.rollbackTransaction()
  }

  async releaseTrx () {
    if (!this.queryRunner) {
      throw new Error('No running transactions!')
    }

    if (!this.queryRunner.isTransactionActive) {
      this.queryRunner = undefined
      throw new Error('No running transactions!')
    }

    this.queryRunner.release()
    this.queryRunner = undefined
  }
}
