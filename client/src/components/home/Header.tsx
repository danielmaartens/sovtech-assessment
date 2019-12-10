import React, {useState, useEffect} from 'react';
import styled, {keyframes, css} from 'styled-components';
import ChuckGuns from '../../assets/img/chuck-guns.png';
import ChuckLaughing from '../../assets/img/chuck-norris-laughing-right.png';


const Header = () => {

    const [startTransition, setStartTransition] = useState(false);

    const HeaderContainer = styled.div`
        display: flex;
        height: 170px;
        width: 100%;
        background-color: darkgrey;
        flex-direction: row;
        justify-content: center;
        align-items: flex-end;
     
    `;

    const ChuckLaughingImgAnimation = keyframes`
    
        from {
             right: -164px;
        }
        to {
            right: -90px;
        }
    `;

    const ChuckImgLeft = styled.img`
        height: 170px;
        position: relative;
    `;

    const ChuckLaughImgRight = styled.img`
        width: 170px;
        position: relative;
        right: -164px;
        animation: ${ChuckLaughingImgAnimation} 3s linear 1s 1 normal forwards;
    `;

    const BannerTitle = styled.div`
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    const TheChuckContainer = styled.div`
        display: flex;
        flex-direction: column;
        flex: 1;
        position: relative;
        bottom: 36px;
    `;

    const TheChuck = styled.div`
        font-family: 'Anton', sans-serif;
        line-height: 1;
        letter-spacing: -.07em;
        color: #fff;
    `;

    const Word = styled.span`
        font-family: 'Anton', Helvetica, sans-serif; 
        text-transform: uppercase;
        color: #fff;
        letter-spacing: -.07em;
        opacity: 0;
    `;

    const firstWordTransition = keyframes`
        0% {
          opacity: 0; 
        }
        
        100% {
            font-size: 2em;
            opacity: 1;
        }
    `;

    const secondWordTransition = keyframes`
        0% {
            opacity: 0;       
        }
        
        100% {
         font-size: 4em;
         opacity: 1;   
        }
    `;

    const FirstWord = styled(Word)`
        letter-spacing: -.07em;
        animation: ${firstWordTransition} .3s ease-in-out 0.3s 1 normal forwards;
        animation-fill-mode: forwards;
    `;

    const SecondWord = styled(Word)`
         animation: ${secondWordTransition} 0.1s cubic-bezier(.190, 1.000, .220, 1.000) 1.3s 1 normal forwards;
    `;

    const ThirdWordAnimation = keyframes`
        from {
            transform: translateX(-1000%);
        }
        
        to {
            transform: translateX(0);
        }
    `;

    const ThirdWord = styled.div`
        font-family: 'Anton',sans-serif;
        font-size: 28px;
        line-height: 1;
        margin-top: -3px;
        letter-spacing: 4px;
        text-transform: uppercase;
        color: #fc0;
    
        animation: ${ThirdWordAnimation} 0.3s cubic-bezier(.190, 1.000, .220, 1.000) 2.3s 1 normal forwards;
        transform: translateX(-1000%);
    `;

    const BannerBackground = styled.div`
       background-color: darkgrey;
        height: 100%;
        width: 100%;
        position: fixed;
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        z-index: -1;
    `;

    return (

        <HeaderContainer>

            <ChuckImgLeft src={ChuckGuns}/>

            <BannerTitle>
                <TheChuckContainer>
                    <TheChuck>
                        <FirstWord>the</FirstWord>
                        <SecondWord>chuckle</SecondWord>
                    </TheChuck>
                    <ThirdWord>generator</ThirdWord>
                </TheChuckContainer>
            </BannerTitle>

            <ChuckLaughImgRight src={ChuckLaughing}/>

        </HeaderContainer>
    )
};

export default Header;