import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  password: string; // should be hashed in a real database
}

export const UserSchema = SchemaFactory.createForClass(User);
