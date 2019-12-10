import {query} from './apollo-client';
import {GET_JOKE} from "./queries";

export function queryJoke(category: string | undefined) {
    return query(GET_JOKE, {category});
}