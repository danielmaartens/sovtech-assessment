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
    const {joke, jokeRequested, laughSounds} = useSelector(state => state);

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
        
        @media (min-width: 1200px) {
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
        padding: 10px 0;
        border-bottom: 1px solid grey;
        display: flex;
        align-items: center;
        justify-content: center;
        clear: both;
    
        @media (min-width: 1200px) {
            border: none;
            font-size: 2em;
        }
       }

        span {
            text-transform: uppercase;
        }
    `;

    const JokeCategory = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2px;
        flex: 0.2;
        text-transform: uppercase;
        position: absolute;
        background: white;
        opacity: 0.5;
        width: 100%;
        
         @media (min-width: 1200px) {
            width: 65%;
            }
    `;

    const JokeText = styled.div`
        min-height: 100px;
        flex: 1;
        font-size: 1.5em;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        background-color: #1e2d47;
        padding: 20px 10px 10px 10px;
        cursor: pointer;
    `;

    const LaughingChuck = styled.img`
        height: 75px;
    
    `;

    const LaughingChuckRight = styled(LaughingChuck)`
        float: right
    `;

    const LaughingChuckLeft = styled(LaughingChuck)`
        float: left;
    `;

    const InfoHeader = styled.div`
        font-weight: bold;
    `;

    const InfoContent = styled.div`
        display: block;
    `;

    const InfoContentContainer = styled.div`
        margin-bottom: 5px;
    `;

    const LoaderContainer = styled.div`
        height: 100px;
        padding: 20px 10px 10px 10px;
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
                            <InfoContent>A <b>Chuckle</b> is a Chuck Norris joke.&nbsp;</InfoContent>
                            <InfoContent> He alone puts the chuck in <em>your</em> chuckle.&nbsp;</InfoContent>
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