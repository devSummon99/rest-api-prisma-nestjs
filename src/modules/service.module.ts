import { Module } from "@nestjs/common";
import { ServiceController } from "src/controllers";
import { PrismaModule } from "src/prisma";
import { ServiceService } from "src/services/";

@Module({
    controllers:[ServiceController],
    providers:[ServiceService],
    exports:[PrismaModule]
})

export class ServiceMdodule {}