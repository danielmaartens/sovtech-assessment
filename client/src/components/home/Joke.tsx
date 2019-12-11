import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook
} from "react-redux";
import React, {useEffect} from 'react';
import {BarLoader} from "react-spinners";

import styled, {keyframes} from 'styled-components';
import {RootState} from "../../types";

const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

const Joke = () => {
    const {joke, jokeRequested, laughSounds, categories, categoryColours: colours} = useSelector(state => state);

    useEffect(() => {
        if (joke) {
            const slap = document.getElementById('slap');
            const laugh = document.getElementById('laugh');

            if (laugh && slap) {
                const laughSoundFile = laughSounds[Math.floor(Math.random() * laughSounds.length)];
                laugh.setAttribute('src', require(`../../assets/sounds/laughs/${laughSoundFile}`));

                slap.addEventListener("ended", () => {
                    (laugh as HTMLAudioElement).play();
                });

                (slap as HTMLAudioElement).play();
            }
        }
    });

    function playLaughSound() {
        const laugh = document.getElementById('laugh');
        (laugh as HTMLAudioElement).play();
    }

    const Container = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 3px 0 10px 0;
        width: 100%;
        font-family: 'Gothic A1', sans-serif;
        
        @media (min-width: 950px) {
            width: 65%;
            margin-top: 10px;
        }
    `;

    const JokeContainer = styled.div`
        display: flex;
        flex-direction: column;
        height: 100%;
        flex: 1;
    `;

    const NoJoke = styled.div`
        text-align: center;
        height: 100%;
        width:100%;
        padding-top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        clear: both;
        font-size: 1.5em;
        
        @media (min-width: 950px) {
            font-size: 2em;
        }

        span {
            text-transform: uppercase;
        }
    `;

    let categoryColour = '';
    if (joke) {
        const indexOfCategory = categories.indexOf(joke.category);
        categoryColour = colours[indexOfCategory];
    }
    const JokeCategory = styled.div`
        background-color: ${categoryColour};
        color: white;
        display: flex;
        align-items: center;
        padding: 2px;
        flex: 0.2;
        text-transform: uppercase;
        width: 100%;
        height: 20px;
        font-size: medium;
    `;

    const JokeText = styled.div`
        font-family: 'Calistoga', cursive;
        min-height: 100px;
        flex: 1;
        font-size: 1.8em;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #1e2d47;
        background-color: white;
        padding: 20px;
        cursor: pointer;
    `;

    const InfoContent = styled.div`
        display: block;
    `;

    const InfoContentContainer = styled.div`
        margin-bottom: 5px;
    `;

    const LoaderContainer = styled.div`
        height: 124px;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    `;

    const flashingText = keyframes`
     50% {
            opacity: 0;
        }
      `;

    const LoadingText = styled.div`
        font-size: 1.5em;
        animation: ${flashingText} 1s linear infinite;
        margin-bottom: 5px;
    `;


    return (
        <Container>
            {
                jokeRequested &&
                <LoaderContainer>
                    <LoadingText>Loading Joke...</LoadingText>
                    <BarLoader color={'#34B667'} height={10} width={200}/>
                </LoaderContainer>
            }
            {
                !joke && !jokeRequested &&
                <NoJoke>
                    <div>
                        <InfoContentContainer>
                            <InfoContent>A <b>Chuckle</b> is a Chuck Norris joke.</InfoContent>
                            <InfoContent> He puts the chuck in your chuckle.</InfoContent>
                        </InfoContentContainer>

                        <InfoContentContainer>
                            <InfoContent>Select a <b>TOPIC</b> below for a <b>topical Chuckle</b>.&nbsp;</InfoContent>
                            <InfoContent>Select <b>RANDOM</b> for a <b>random Chuckle</b>.</InfoContent>
                        </InfoContentContainer>
                    </div>
                </NoJoke>
            }
            {
                joke &&
                <JokeContainer>
                    <JokeCategory>
                        <b>{joke.category}</b> chuckle
                    </JokeCategory>
                    <JokeText onClick={() => playLaughSound()}>
                        {joke.text}
                    </JokeText>
                </JokeContainer>
            }
        </Container>
    )
};

export default Joke;