import { Controller, Get, UseGuards } from '@nestjs/common';
import { ListReviewsRepository } from './list-reviews.repository';
import { ReviewResponse } from './review-response';
import { ApiBasicAuth, ApiOkResponse } from '@nestjs/swagger';
import { AuthGuard } from '../../auth/auth.guard';

@Controller()
@ApiBasicAuth()
@UseGuards(AuthGuard)
export class ListReviewsController {
  constructor(private readonly listSeriesRepository: ListReviewsRepository) {}

  @Get('/series')
  @ApiOkResponse({ type: ReviewResponse })
  async listSeries(): Promise<ReviewResponse[]> {
    const series = await this.listSeriesRepository.findAll();
    return series.map((s) => new ReviewResponse(s));
  }
}
