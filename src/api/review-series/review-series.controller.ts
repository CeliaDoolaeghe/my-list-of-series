import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { ReviewSeriesRepository } from './review-series.repository';
import { CommentChecker } from './comment-checker';
import { SeriesRequest } from './series-request';

@Controller()
export class ReviewSeriesController {
  constructor(
    private commentChecker: CommentChecker,
    private reviewSeriesRepository: ReviewSeriesRepository,
  ) {}

  @Post('/series/reviews')
  async grade(@Body() gradeRequest: SeriesRequest): Promise<void> {
    if (gradeRequest.comment) {
      const isValidComment = this.commentChecker.check(gradeRequest.comment);

      if (!isValidComment) {
        throw new BadRequestException({
          message: 'This comment is not acceptable',
        });
      }
    }

    await this.reviewSeriesRepository.save(gradeRequest);
  }
}
