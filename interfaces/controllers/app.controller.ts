import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from '../../usecases/app.service';
import { Response } from 'express';

@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHelloC(@Res() res: Response) {
    console.log('コントローラー IN');
    const message: string = this.appService.getHelloS();

    return res.json({
      test: message,
    });
  }
}
