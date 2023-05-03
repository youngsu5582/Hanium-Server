import { Module } from '@nestjs/common';
import { webAdaptor } from './web.adaptor';


@Module({
  imports: [],
  controllers: [],
  providers: [webAdaptor],
})
export class AppModule {}
