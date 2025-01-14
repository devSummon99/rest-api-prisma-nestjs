import { Module } from '@nestjs/common';
import { ServiceModule } from './service.module';


@Module({
  imports: [ServiceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
