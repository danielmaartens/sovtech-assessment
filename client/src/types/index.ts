import { Action } from "redux";

export interface RootState {
    jokeRequested: boolean,
    jokeRequestSuccess: boolean,
    jokeRequestError: any,
    joke: JokeI | null,
    selectedJokeCategory: string | null,
    categories: string[],
    laughSounds: string[]
}

export interface ActionI<T> extends Action {
    payload: T
}

export interface JokeI {
    category: string | null,
    text: string
}