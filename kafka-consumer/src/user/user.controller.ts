import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    private readonly logger = new Logger(UserController.name);
    constructor(
        private userService: UserService
    ) { }

    @MessagePattern('findall-users')
    handleUserFindAll(@Payload() payload: any): Promise<any[]> {
        this.logger.log('handleUserFindAll', JSON.stringify(payload));
        return this.userService.findAll();
    }

    @MessagePattern('create-user')
    async handleUserCheckin(@Payload() payload: any): Promise<any> {
        this.logger.log('handleUserCheckin', JSON.stringify(payload));
        return await this.userService.create(payload.value);
    }
}
