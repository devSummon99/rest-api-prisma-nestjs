import { Module } from "@nestjs/common";
import { ServiceController } from "src/controllers";
import { PrismaModule } from "./";
import { ServiceService } from "src/services/";

@Module({
    controllers:[ServiceController],
    providers:[ServiceService],
    imports:[PrismaModule]
})

export class ServiceModule {}