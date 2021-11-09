import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { CreateReviewRepository } from './create-review.repository';
import { CommentChecker } from './comment-checker';
import { ReviewRequest } from './review-request';

@Controller()
export class CreateReviewController {
  constructor(
    private commentChecker: CommentChecker,
    private createReviewRepository: CreateReviewRepository,
  ) {}

  @Post('/series/reviews')
  async grade(@Body() gradeRequest: ReviewRequest): Promise<void> {
    if (gradeRequest.comment) {
      const isValidComment = this.commentChecker.check(gradeRequest.comment);

      if (!isValidComment) {
        throw new BadRequestException({
          message: 'This comment is not acceptable',
        });
      }
    }

    await this.createReviewRepository.save(gradeRequest);
  }
}
