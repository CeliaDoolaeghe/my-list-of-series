import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SeriesReview } from '../../series-reviews/series-review';
import { Model } from 'mongoose';

@Injectable()
export class ListReviewsRepository {
  constructor(
    @InjectModel(SeriesReview.name)
    private seriesReviewModel: Model<SeriesReview>,
  ) {}

  async findAll(): Promise<SeriesReview[]> {
    return this.seriesReviewModel.find({}, { _id: 0 }).exec();
  }
}
