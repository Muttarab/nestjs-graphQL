import { InputType, Int, Field } from '@nestjs/graphql';
import { Projecttype } from '../project.entity';

@InputType()
export class CreateProjectInput {
  @Field()
  name: string

  @Field(() => Int)
  code: number

  @Field()
  projecttype: Projecttype;

}