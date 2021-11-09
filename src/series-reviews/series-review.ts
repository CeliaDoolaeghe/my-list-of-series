import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class SeriesReview {
  @Prop()
  title: string;

  @Prop()
  grade: number;

  @Prop()
  comment?: string;
}

export const SeriesReviewSchema = SchemaFactory.createForClass(SeriesReview);
