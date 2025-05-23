import { ObjectType, Field } from '@nestjs/graphql';
@ObjectType()
export class User {
  @Field()
  email: string;
  @Field()
  password: string;
}
