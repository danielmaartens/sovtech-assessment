import { createReducer, createActions } from 'reduxsauce'
import Immutable, {ImmutableObject} from 'seamless-immutable';
import {RootState, ActionI, JokeI} from "../../../types";

const { Types, Creators } = createActions({
    getCategories: ['payload'],
    setCategories: ['payload'],
    getJoke: ['category'],
    setJoke: ['payload'],
    setJokeError: ['error'],

});

export default Creators;

const INITIAL_STATE = Immutable<RootState>({
    jokeRequested: false,
    jokeRequestSuccess: false,
    jokeRequestError: null,
    joke: null,
    selectedJokeCategory: null,
    categories: [],
    laughSounds: [
        'chuckle.mp3',
        'crowd-laughing.mp3',
        'giggle.mp3',
        'goofy-laugh.mp3',
        'laugh-applause.mp3',
        'laugh-to-self.mp3',
        'male-short-laugh.mp3',
        'maniacal-witches.mp3'
    ]
});

const jokeRequested = (state = INITIAL_STATE, action: any): ImmutableObject<RootState> => {
    return state.merge({
        jokeRequestError: undefined,
        jokeRequestSuccess: false,
        joke: null,
        jokeRequested: true
    })
};

const jokeRequestError = (state = INITIAL_STATE, action: any): ImmutableObject<RootState> => {
    return state.merge({
        jokeRequestError: action.error,
        jokeRequested: false,
        jokeRequestSuccess: false
    })
};
const jokeRequestSuccess = (state = INITIAL_STATE, action: ActionI<JokeI>): ImmutableObject<RootState> => {

    return state.merge({
        jokeRequestError: undefined,
        jokeRequested: false,
        jokeRequestSuccess: true,
        joke: action.payload
    })
};

const setCategories = (state = INITIAL_STATE, action: ActionI<string[]>): ImmutableObject<RootState> => {
    return state.merge({
        categories: action.payload
    })
};

const HANDLERS = {
    [Types.GET_JOKE]: jokeRequested,
    [Types.SET_JOKE]: jokeRequestSuccess,
    [Types.SET_JOKE_ERROR]: jokeRequestError,
    [Types.SET_CATEGORIES]: setCategories
};

export const reducer = createReducer<ImmutableObject<RootState>, ActionI<any>>(INITIAL_STATE, HANDLERS);