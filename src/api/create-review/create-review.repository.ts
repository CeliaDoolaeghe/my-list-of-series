import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SeriesReview } from '../../series-reviews/series-review';
import { Model } from 'mongoose';

@Injectable()
export class CreateReviewRepository {
  constructor(
    @InjectModel(SeriesReview.name)
    private seriesReviewModel: Model<SeriesReview>,
  ) {}

  async save(series: SeriesReview): Promise<void> {
    const createdSeries = await this.seriesReviewModel.create(series);
    await createdSeries.save();
  }
}
