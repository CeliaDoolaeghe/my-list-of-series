import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Series } from '../../series/series';
import { Model } from 'mongoose';

@Injectable()
export class ReviewSeriesRepository {
  constructor(@InjectModel(Series.name) private seriesModel: Model<Series>) {}

  async save(series: Series): Promise<void> {
    const createdSeries = await this.seriesModel.create(series);
    await createdSeries.save();
  }
}
