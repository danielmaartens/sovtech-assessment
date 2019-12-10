import {useDispatch} from 'react-redux';
import React, {useEffect} from 'react';
import {useQuery} from '@apollo/react-hooks';
import styled, {css} from 'styled-components';
import { FadeLoader } from "react-spinners";
import {CATEGORIES} from '../../graphql/queries';
import Actions from './duck/redux';


const Categories = () => {
    const dispatch = useDispatch();
    const {loading, error, data} = useQuery(CATEGORIES);

    useEffect(() => {
        if (data) {
            dispatch(Actions.setCategories(data.categories));
        }
    });

    const Category = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem .5rem;
        text-align: center;
        text-transform: uppercase;
        color: white;
        font-weight: bold;
        cursor: grabbing;
        transition: all .2s ease-in-out;
        
        &:hover {
        transform: scale(1.1);
        }
        
        @media (min-width: 1200px) {
            height: 50px;
            font-size: 2em;
        }
    `;

    const CategoriesContainer = styled.div`
        width: 100%;
      
        @media (min-width: 1200px) {
            width: 65%;
        }
    `;

    const CategoriesGrid = styled.div`
        margin: 10px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        grid-auto-rows: auto;
        grid-row-gap: .5rem;
        grid-column-gap: 1rem;
        
          @media (min-width: 1200px) {
            margin: 10px 0 0 0;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        }
    `;

    const LoaderContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    `;

    const colours = [
        '#b6940e',
        '#004f94',
        '#911002',
        '#1e2d47',
        '#be6600',
        '#b6940e',
        '#004f94',
        '#911002',
        '#1e2d47',
        '#be6600',
        '#b6940e',
        '#004f94',
        '#911002',
        '#1e2d47',
        '#be6600',
        '#1e2d47',
    ];

    return (
        <CategoriesContainer>
            {
                loading &&
                    <LoaderContainer>
                    <FadeLoader color="#fc0"/>
                    </LoaderContainer>
            }
            {
                !loading && !error && data &&
                <CategoriesGrid>

                    {
                        data.categories.map((name: string, index: number) => (
                            <Category style={{backgroundColor: `${colours[index]}`}} onClick={() => {
                                // console.log(`${name} clicked`);
                                dispatch(Actions.getJoke(name))
                            }} key={`cat--${index}`}>
                                {name}
                            </Category>
                        ))
                    }

                </CategoriesGrid>
            }
            </CategoriesContainer>
    );
};

export default Categories;