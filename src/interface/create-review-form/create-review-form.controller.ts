import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class CreateReviewFormController {
  @Get('/interface')
  @Render('create-review')
  createReviewForm(): void {
    // Rendering form
  }
}
