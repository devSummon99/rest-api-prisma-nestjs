import { Module } from "@nestjs/common";
import { PrismaServices } from "./pisma.service";

@Module({
    providers:[PrismaServices],
    exports:[PrismaServices]
})
export class PrismaModule {};