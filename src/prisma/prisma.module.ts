import { Module } from "@nestjs/common";
import { PrismaServices } from "./";

@Module({
    providers:[PrismaServices],
    exports:[PrismaServices]
})
export class PrismaModule {};