import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  
  @Get('api/ping')
  ping(): string {
    return 'pong';
  }
}
