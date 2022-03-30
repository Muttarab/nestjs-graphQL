import { InputType, Field, Int } from '@nestjs/graphql';
import { Currency } from '../project.entity';

@InputType()
export class UpdateProjectInput {
  @Field()
  id: string

  @Field()
  name: string

  @Field(() => Int)
  code: number
}
