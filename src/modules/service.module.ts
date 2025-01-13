import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers:[],
    providers:[],
    exports:[PrismaModule]
})

export class ServiceMdodule {}