import { Controller, Get } from '@nestjs/common';
import { Series } from '../../series/series';
import { ListSeriesRepository } from './list-series.repository';

@Controller()
export class ListSeriesController {
  constructor(private readonly listSeriesRepository: ListSeriesRepository) {}

  @Get('/series')
  async listSeries(): Promise<Series[]> {
    return this.listSeriesRepository.findAll();
  }
}
