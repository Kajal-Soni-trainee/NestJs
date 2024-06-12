import { Module } from '@nestjs/common';
import { CatController } from './cats.controller';
import { CatService } from './cats.service';
import { DatabaseModule } from '../db/database.module';
import { catsProviders } from './cats.provider';
@Module({
  imports: [DatabaseModule],
  controllers: [CatController],
  providers: [CatService, ...catsProviders],
})
export class CatModule {}
