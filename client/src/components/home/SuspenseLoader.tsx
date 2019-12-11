import React from 'react';
import {BeatLoader} from "react-spinners";
import styled from 'styled-components';

const SuspenseLoader = () => {

    const Container = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 20px;
        // height: 50px;
    `;

    return (
        <Container>
            <BeatLoader color='#a9a9a9'/>
        </Container>
    )
};

export default SuspenseLoader;