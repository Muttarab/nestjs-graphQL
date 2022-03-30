import { InputType, Int, Field } from '@nestjs/graphql';
import { Currency } from '../project.entity';


@InputType()
class ItemDTO{
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
  currency: Currency;

  @Field(type => [ItemDTO])
  items: Array<{ description: string; rate: number; quantity: number }>;
}