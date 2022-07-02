import { Module } from '@nestjs/common';
import { CheesesModule } from './cheeses/cheeses.module';

//TODO: implement authentication to protect the endpoints (e.g. use Auth0)
@Module({
  imports: [CheesesModule],
})
export class AppModule {}
