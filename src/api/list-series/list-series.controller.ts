import { Controller, Get } from '@nestjs/common';
import { ListSeriesRepository } from './list-series.repository';
import { SeriesResponse } from './series-response';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller()
export class ListSeriesController {
  constructor(private readonly listSeriesRepository: ListSeriesRepository) {}

  @Get('/series')
  @ApiOkResponse({ type: SeriesResponse })
  async listSeries(): Promise<SeriesResponse[]> {
    const series = await this.listSeriesRepository.findAll();
    return series.map((s) => new SeriesResponse(s));
  }
}
