import { Module } from '@nestjs/common';
import { CheesesModule } from './cheeses/cheeses.module';

@Module({
  imports: [CheesesModule],
})
export class AppModule {}
