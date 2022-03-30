import { InputType, Field, Int } from '@nestjs/graphql';
import { Projecttype } from '../project.entity';
import { ItemDTO } from './create-project.input'

@InputType()
export class UpdateProjectInput {
  @Field()
  id: string

  @Field()
  name: string

  @Field(() => Int)
  code: number

  @Field()
  projecttype: Projecttype;

  @Field(type => [ItemDTO])
  items: Array<{ description: string; rate: number; quantity: number }>;
}
