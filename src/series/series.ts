import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Series {
  @Prop()
  title: string;

  @Prop()
  grade: number;

  @Prop()
  comment?: string;
}

export const SeriesSchema = SchemaFactory.createForClass(Series);
