import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { webAdaptor } from './web.adaptor';


@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,webAdaptor],
})
export class AppModule {}
