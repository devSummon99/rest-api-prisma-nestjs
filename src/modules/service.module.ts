import { Module } from "@nestjs/common";
import { ServiceController } from "src/controllers/service.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { ServiceService } from "src/services/service.service";

@Module({
    controllers:[ServiceController],
    providers:[ServiceService],
    exports:[PrismaModule]
})

export class ServiceMdodule {}