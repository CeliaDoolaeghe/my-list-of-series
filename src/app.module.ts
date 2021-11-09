import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ListSeriesModule } from './api/list-series/list-series.module';
import { ReviewSeriesModule } from './api/review-series/review-series.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/my-list-of-series'),
    ListSeriesModule,
    ReviewSeriesModule,
  ],
})
export class AppModule {}
