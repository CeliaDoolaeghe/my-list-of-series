import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ListReviewsModule } from './api/list-reviews/list-reviews.module';
import { CreateReviewModule } from './api/create-review/create-review.module';
import { CreateReviewFormModule } from './interface/create-review-form/create-review-form.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/my-list-of-series'),
    AuthModule,
    ListReviewsModule,
    CreateReviewModule,
    CreateReviewFormModule,
  ],
})
export class AppModule {}
