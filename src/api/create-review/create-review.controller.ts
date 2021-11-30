import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { CreateReviewRepository } from './create-review.repository';
import { CommentChecker } from './comment-checker';
import { ReviewRequest } from './review-request';
import { ApiBasicAuth } from '@nestjs/swagger';
import { AuthGuard } from '../../auth/auth.guard';
import { MandatoryCommentOnBadGradePipe } from './mandatory-comment-on-bad-grade.pipe';

@Controller()
@ApiBasicAuth()
@UseGuards(AuthGuard)
export class CreateReviewController {
  constructor(
    private commentChecker: CommentChecker,
    private createReviewRepository: CreateReviewRepository,
  ) {}

  @Post('/series/reviews')
  @UsePipes(new MandatoryCommentOnBadGradePipe())
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
