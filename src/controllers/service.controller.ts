import { Controller, Delete, Get, Post } from "@nestjs/common";
import { ServiceService } from "src/services/service.service";

@Controller('service')
export class ServiceController {
    constructor(private readonly serviceService : ServiceService){}

    @Get()

    @Get()

    @Post()

    @Put()

    @Delete()
}