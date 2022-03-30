import { InputType, Int, Field } from '@nestjs/graphql';
import { Projecttype } from '../project.entity';

@InputType()
export class ItemDTO{
    @Field()
    description: string;

    @Field()
    rate: number;

    @Field()
    quantity: number
}

@InputType()
export class CreateProjectInput {
  @Field()
  name: string

  @Field(() => Int)
  code: number

  @Field()
  projecttype: Projecttype;

  @Field(type => [ItemDTO])
  items: Array<{ description: string; rate: number; quantity: number }>;
}