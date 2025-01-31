
import { Module } from '@nestjs/common';
import { databaseProviders } from './ormconfig.providers.js';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
