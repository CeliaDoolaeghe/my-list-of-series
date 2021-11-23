import { Controller, Get, Render } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Controller()
export class CreateReviewFormController {
  @Get('/interface')
  @ApiExcludeEndpoint()
  @Render('create-review')
  createReviewForm(): void {
    // Rendering form
  }
}
