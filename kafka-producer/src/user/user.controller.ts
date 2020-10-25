import { Body, Controller, Get, OnModuleInit, Post } from '@nestjs/common';
import { Client, ClientKafka } from '@nestjs/microservices';
import { Observable } from 'rxjs';

import { microserviceConfig } from './../microserviceConfig';
import { CreateUserDto } from './create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController implements OnModuleInit {
    constructor(private readonly userService: UserService) { }

    @Client(microserviceConfig)
    client: ClientKafka;


    onModuleInit() {
        const requestPatterns = [
            'findall-users',
            'create-user'
        ];
        requestPatterns.forEach(pattern => {
            this.client.subscribeToResponseOf(pattern);
        });
    }

    @Get()
    getUsers(): Observable<string> {
        return this.client.send<string>('findall-users', '');
    }

    @Post()
    createUser(@Body() userDto: CreateUserDto): Observable<string> {
        return this.client.send<string>('create-user', JSON.stringify(userDto));
    }
}
