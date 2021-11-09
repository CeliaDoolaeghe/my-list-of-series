import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, Max, Min } from 'class-validator';

export class ReviewRequest {
  @ApiProperty({ description: 'Title of the series' })
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'Grade between 0 and 5' })
  @IsNumber()
  @Min(0)
  @Max(5)
  grade: number;

  @ApiPropertyOptional({ description: 'A comment on the series' })
  @IsOptional()
  @IsNotEmpty()
  comment?: string;

  constructor(title: string, grade: number, comment?: string) {
    this.title = title;
    this.grade = grade;
    this.comment = comment;
  }
}
