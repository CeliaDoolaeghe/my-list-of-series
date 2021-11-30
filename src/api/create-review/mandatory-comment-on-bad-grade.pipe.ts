import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { ReviewRequest } from './review-request';

@Injectable()
export class MandatoryCommentOnBadGradePipe implements PipeTransform {
  transform(value: unknown): ReviewRequest {
    const reviewRequest = plainToClass(ReviewRequest, value);

    if (reviewRequest.grade < 3 && !reviewRequest.comment) {
      throw new BadRequestException(
        'Comment is mandatory when grade is lower than 3',
      );
    }

    return reviewRequest;
  }
}
