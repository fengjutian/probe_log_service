import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { LogController } from './log/log.controller';
import { LogService } from './log/log.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
    CatsModule,
  ],
  controllers: [LogController],
  providers: [LogService],
})
export class AppModule {}
