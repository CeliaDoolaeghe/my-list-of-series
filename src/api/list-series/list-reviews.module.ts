import { Module } from '@nestjs/common';
import { ListReviewsController } from './list-reviews.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  SeriesReview,
  SeriesReviewSchema,
} from '../../series-reviews/series-review';
import { ListReviewsRepository } from './list-reviews.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SeriesReview.name, schema: SeriesReviewSchema },
    ]),
  ],
  controllers: [ListReviewsController],
  providers: [ListReviewsRepository],
})
export class ListReviewsModule {}
