import {Field, ObjectType} from "type-graphql";

@ObjectType()
export class Joke {
    @Field({nullable: true})
    category?: string;

    @Field()
    text: string;
}