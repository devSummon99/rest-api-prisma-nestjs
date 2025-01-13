import { Injectable } from "@nestjs/common";
import { Service } from "@prisma/client";
import { PrismaServices } from "src/prisma/pisma.service";

@Injectable()
export class ServiceService  {
    constructor(private prisma: PrismaServices){}

     async getAllServices(): Promise <Service[]> {

    }
}