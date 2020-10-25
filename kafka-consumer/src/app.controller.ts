import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);
    constructor(
        private appService: AppService
    ) { }

    @MessagePattern('findall-users')
    handleUserFindAll(@Payload() payload: any): Promise<any[]>{
        this.logger.log('handleUserFindAll', JSON.stringify(payload));
        return this.appService.findAll();
    }

    @MessagePattern('create-user')
    async handleUserCheckin(@Payload() payload: any): Promise<any> {
        this.logger.log('handleUserCheckin', JSON.stringify(payload));
        return await this.appService.create(payload.value);
    }
}
