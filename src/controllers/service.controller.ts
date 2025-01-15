import {
  Controller,
  HttpCode,
  Delete,
  Get,
  Post,
  Put,
  Body,
  Param,
  ParseIntPipe,
  InternalServerErrorException,
  NotFoundException,
  HttpStatus,
} from "@nestjs/common";
import { Service } from "@prisma/client";
import { STATUS_CODES } from "http";
import { ServiceService } from "src/services/service.service";

@Controller("service")
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Get()
  async getAllServices() {
    try {
      const services =  await this.serviceService.getAllServices();
       if (services.length === 0) {
       return new NotFoundException("No services found") ;
      }
      return services;
    } catch (error) {
      new InternalServerErrorException("Internal Server Error");
    }
  }

  @Get(":id")
  async getServiceByID(
    @Param("id", ParseIntPipe) id: number
  ): Promise<Service> {
    try {
      const service = await this.serviceService.getServiceByID(id);
      console.log(service)
      if (service === null) {
        console.log('404')
        throw new NotFoundException(`Service with id ${id} not found`);
       }
      return service;
    } catch (error) {
       new InternalServerErrorException("Internal Server Error");
    }
  }

  @Post()
  async createService(@Body() service: Service): Promise<Service> {
    return await this.serviceService.createService(service);
  }

  @Put(":id")
  async updateServiceByID(
    @Body() data: Service,
    @Param("id", ParseIntPipe) id: number
  ) {
    try {
      const service = await this.serviceService.getServiceByID(id);
      if (!service) {
        throw new NotFoundException(`Service with id ${id} not found`);
      }
      await this.serviceService.updateService(data, id);
    } catch (error) {
       new InternalServerErrorException("Internal Server Error");
    }
  }

  @Delete(":id")
  async deleteService(@Param("id", ParseIntPipe) id: number): Promise<Service> {
    try {
      const serviceDeleted = await this.serviceService.getServiceByID(id);
      if (!serviceDeleted) {
        throw new NotFoundException(`Service with id ${id} not found`);
      }
      await this.serviceService.deleteService(id);
      return serviceDeleted;
    } catch (error) {
      throw new InternalServerErrorException("Internal Server Error");
    }
  }
}
