import { Module } from '@nestjs/common';
import { ListSeriesController } from './list-series.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Series, SeriesSchema } from '../../series/series';
import { ListSeriesRepository } from './list-series.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Series.name, schema: SeriesSchema }]),
  ],
  controllers: [ListSeriesController],
  providers: [ListSeriesRepository],
})
export class ListSeriesModule {}
