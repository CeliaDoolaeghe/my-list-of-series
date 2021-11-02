import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Series } from '../../series/series';
import { Model } from 'mongoose';

@Injectable()
export class ListSeriesRepository {
  constructor(@InjectModel(Series.name) private seriesModel: Model<Series>) {}

  async findAll(): Promise<Series[]> {
    return this.seriesModel.find({}, { _id: 0 }).exec();
  }
}
