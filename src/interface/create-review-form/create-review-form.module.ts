import { Module } from '@nestjs/common';
import { CreateReviewFormController } from './create-review-form.controller';

@Module({
  controllers: [CreateReviewFormController],
})
export class CreateReviewFormModule {}
