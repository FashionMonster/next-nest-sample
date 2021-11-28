import { Controller, Get, Res } from "@nestjs/common";
import { AppService } from "./app.service";
import { Response } from "express";

@Controller("test")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHelloC(@Res() res: Response) {
    console.log("コントローラー IN");
    const message: string = this.appService.getHelloS();

    //通常のサービス呼出しは可能
    // const test = new AppService();
    // const message: string = test.getHelloS();

    return res.json({
      test: message,
    });
  }
}
