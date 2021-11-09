import { Module } from '@nestjs/common';
import { CreateReviewController } from './create-review.controller';
import { CreateReviewRepository } from './create-review.repository';
import { CommentChecker } from './comment-checker';
import { MongooseModule } from '@nestjs/mongoose';
import {
  SeriesReview,
  SeriesReviewSchema,
} from '../../series-reviews/series-review';

@Module({
  controllers: [CreateReviewController],
  imports: [
    MongooseModule.forFeature([
      { name: SeriesReview.name, schema: SeriesReviewSchema },
    ]),
  ],
  providers: [CreateReviewRepository, CommentChecker],
})
export class CreateReviewModule {}
