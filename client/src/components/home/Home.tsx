import React, {Suspense, lazy} from 'react';
import styled from 'styled-components';
import RandomJokeButton from "./RandomJokeButton";
import Header from "./Header";
import SuspenseLoader from "./SuspenseLoader";

const Categories = lazy(() => import('./Categories'));
const Joke = lazy(() => import('./Joke'));

const Home: React.FC = () => {

    const Container = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `;

    const HeaderJokeContainer = styled.div`
        background-color: white;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: sticky;
        top: 0;
        width: 100%;
    `;

    const ButtonContainer = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `;

    return (
        <Container>
            <audio id="slap" src={require('../../assets/sounds/slap.mp3')}></audio>
            <audio id="laugh"></audio>

            <HeaderJokeContainer>
                <Header/>
                <Suspense fallback={<SuspenseLoader/>}>
                    <Joke/>
                </Suspense>
            </HeaderJokeContainer>

            <ButtonContainer>
                <RandomJokeButton/>
                <Suspense fallback={<SuspenseLoader/>}>
                    <Categories/>
                </Suspense>
            </ButtonContainer>
        </Container>
    )

};

export default Home;