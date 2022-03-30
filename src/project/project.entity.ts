import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Employee } from '../employee/employee.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export enum Projecttype {
  WEB = "WEB",
  DESKTOP = "DESKTOP",
  MOBILE = "MOBILE",
  DEVOPS = "DEVOPS"
}

@ObjectType()
export class Item {
  @Field()
  description: string;

  @Field()
  rate: number;

  @Field()
  quantity: number
}

@ObjectType()
@Entity()
export class Project {

  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field()
  @Column()
  name: string

  @Field(() => Int)
  @Column()
  code: number

  @Field()
  @Column({
    type: "enum",
    enum: Projecttype,
    default: Projecttype.WEB
  })
  projecttype: Projecttype;

  @Field(type => [Item])
  @Column({
    type: 'jsonb',
    array: false,
    default: [],
    nullable: false,
  })
  Items: Item[];

  @OneToMany(() => Employee, employee => employee.project)
  @Field(() => [Employee], { nullable: true })
  employees: Employee[]
}