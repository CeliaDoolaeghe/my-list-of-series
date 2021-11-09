import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Series } from '../../series/series';

export class SeriesResponse {
  @ApiProperty()
  title: string;

  @ApiProperty()
  grade: number;

  @ApiPropertyOptional()
  comment?: string;

  constructor(series: Series) {
    this.title = series.title;
    this.grade = series.grade;
    this.comment = series.comment;
  }
}
