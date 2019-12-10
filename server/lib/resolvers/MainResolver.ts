import {Query, Resolver, Arg} from "type-graphql";
import axios from 'axios';
import {Joke} from "../schemas";

@Resolver()
export class MainResolver {
    private BASE_URL: String = 'https://api.chucknorris.io/jokes';

    @Query(returns => [String])
    async categories() {
        const cat =  await axios.get(`${this.BASE_URL}/categories`);
        return cat.data;
    }
    @Query(returns => Joke)
    async joke(
        @Arg("category", {nullable: false}) category: string,
    ) {
        const joke: any = await axios.get(`${this.BASE_URL}/random${category !== 'random' ? `?category=${category}` : ''}`);
        return {
            category: joke.data.categories.length ? joke.data.categories[0] : category,
            text: joke.data.value
        };
    }
}