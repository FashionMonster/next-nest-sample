import { Module } from '@nestjs/common';
import { AppController } from '../../interfaces/controllers/app.controller';
import { AppService } from '../../usecases/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
