import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook, useDispatch
} from "react-redux";
import React from 'react';
import styled from 'styled-components';
import Actions from './duck/redux';

import {RootState} from "../../types";

const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

const RandomJokeButton = () => {
    const dispatch = useDispatch();
    const {categories} = useSelector(state => state);

    const GenerateJokeButton = styled.div`
        width: calc(100% - 20px);
        box-sizing: border-box;
        margin: 0 10px;
        cursor: grabbing;
        background-color: #004f94;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        color: white;
        font-weight: bold;
        transition: all .2s ease-in-out;
        
        &:hover {
        transform: scale(1.05);
        }
        
        @media (min-width: 1200px) {
            height: 80px;
            width: 65%;
            margin: 0;
            font-size: 2em;
        }
    
    `;

    function handleClick() {

        if (categories && categories.length) {
            const randomCat = categories[Math.floor(Math.random() * categories.length)];
            dispatch(Actions.getJoke(randomCat));
        } else {
            dispatch(Actions.getJoke());
        }
    }

    return (
        <GenerateJokeButton onClick={() => handleClick()}>
            random
        </GenerateJokeButton>
    )
};

export default RandomJokeButton;