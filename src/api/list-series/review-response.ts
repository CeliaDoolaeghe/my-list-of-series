import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { SeriesReview } from '../../series-reviews/series-review';

export class ReviewResponse {
  @ApiProperty()
  title: string;

  @ApiProperty()
  grade: number;

  @ApiPropertyOptional()
  comment?: string;

  constructor(series: SeriesReview) {
    this.title = series.title;
    this.grade = series.grade;
    this.comment = series.comment;
  }
}
