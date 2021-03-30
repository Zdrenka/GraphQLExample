import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

//^^^^^^^^^^
//graphQL type and DB Type using the ORM.. Field is Grapql and Entioty is ORN ovbs.. pretty sweet!
@ObjectType()
@Entity()
export class Movie extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: Number;

  @Field()
  @Column()
  title: String;

  @Field(() => Int)
  @Column()
  minutes: Number;
}