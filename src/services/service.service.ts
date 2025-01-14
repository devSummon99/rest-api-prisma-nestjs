import { Injectable } from "@nestjs/common";
import { Service } from "@prisma/client";
import { PrismaServices } from "src/prisma/";

@Injectable()
export class ServiceService {
  constructor(private prisma: PrismaServices) {}

  async getAllServices(): Promise<Service[]> {
    return await this.prisma.service.findMany();
  }

  async getServiceByID(id: number): Promise<Service> {
    return await this.prisma.service.findFirst({ where: { id: id } });
  }

  async createService(data: Service): Promise<Service> {
    return this.prisma.service.create({ data });
  }

  async updateService(data: Service, id: number): Promise<Service> {
    return this.prisma.service.update({ where: { id: id }, data });
  }

  async deleteService(id: number): Promise<Service> {
    return this.prisma.service.delete({ where: { id: id } });
  }
}
