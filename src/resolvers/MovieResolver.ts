import { Movie } from "../entity/Movie"
import { Resolver, Mutation, Arg, Int, Query, InputType, Field } from "type-graphql";


@InputType()
class MovieInput {
    @Field()
    title: string;

    @Field(() => Int)
    minutes: number;
}


@Resolver()
export class MovieResolver {
  //arg shows in the Docs
  @Mutation(() => Movie)
  async createMovie(@Arg("options", () => MovieInput) options: MovieInput) {
    const movie = await Movie.create(options).save(); //two SQL statements? create and select >:(
    return movie;
  }

  //number not a graphQL type, could be int or float..so define it as Int
  @Mutation(() => Boolean)
  async updateMovie(
    @Arg("id", () => Int) id: Number,
    @Arg("options", () => MovieInput) options: MovieInput
  ) {
    await Movie.update({ id }, options); //search by id, then input (options)
    return true;
  }

  @Mutation(() => Boolean)
  async deleteMovie(@Arg("id", () => Int) id: Number) {
    await Movie.delete({ id });
    return true;
  }

  //READ
  @Query(() => [Movie])
  movies() {
    //return all movies
    return Movie.find();
  }
}


