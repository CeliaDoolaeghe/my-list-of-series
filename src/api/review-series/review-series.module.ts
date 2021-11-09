import { Module } from '@nestjs/common';
import { ReviewSeriesController } from './review-series.controller';
import { ReviewSeriesRepository } from './review-series.repository';
import { CommentChecker } from './comment-checker';
import { MongooseModule } from '@nestjs/mongoose';
import { Series, SeriesSchema } from '../../series/series';

@Module({
  controllers: [ReviewSeriesController],
  imports: [
    MongooseModule.forFeature([{ name: Series.name, schema: SeriesSchema }]),
  ],
  providers: [ReviewSeriesRepository, CommentChecker],
})
export class ReviewSeriesModule {}
