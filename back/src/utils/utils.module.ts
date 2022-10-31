import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { UtilsService } from './utils.service';

@Module({
  imports: [DbModule],
  providers: [UtilsService],
  exports: [UtilsService],
})
export class UtilsModule {}
