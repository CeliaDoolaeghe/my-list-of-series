import { Controller, Get } from '@nestjs/common';
import { ListReviewsRepository } from './list-reviews.repository';
import { ReviewResponse } from './review-response';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller()
export class ListReviewsController {
  constructor(private readonly listSeriesRepository: ListReviewsRepository) {}

  @Get('/series')
  @ApiOkResponse({ type: ReviewResponse })
  async listSeries(): Promise<ReviewResponse[]> {
    const series = await this.listSeriesRepository.findAll();
    return series.map((s) => new ReviewResponse(s));
  }
}
