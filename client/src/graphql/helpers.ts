import {query} from './apollo-client';
import {GET_JOKE} from "./queries";

export function queryJoke(category: string | undefined) {
    console.log('query joke called');
    return query(GET_JOKE, {category});
}