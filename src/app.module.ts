import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ListReviewsModule } from './api/list-series/list-reviews.module';
import { CreateReviewModule } from './api/create-review/create-review.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/my-list-of-series'),
    ListReviewsModule,
    CreateReviewModule,
  ],
})
export class AppModule {}
