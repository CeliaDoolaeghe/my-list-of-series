import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, Max, Min } from 'class-validator';

export class ReviewRequest {
  @ApiProperty()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(5)
  grade: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNotEmpty()
  comment?: string;

  constructor(title: string, grade: number, comment?: string) {
    this.title = title;
    this.grade = grade;
    this.comment = comment;
  }
}
