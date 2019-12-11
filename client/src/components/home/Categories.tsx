import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useQuery} from '@apollo/react-hooks';
import styled from 'styled-components';
import {FadeLoader} from "react-spinners";
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
        
        @media (min-width: 798px) {
            height: 50px;
            font-size: 2em;
        }
    `;

    const CategoriesContainer = styled.div`
        width: 100%;
      
        @media (min-width: 798px) {
            width: 80%;
        }
    `;

    const CategoriesGrid = styled.div`
        margin: 5px 2px;
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(100px,1fr));
        grid-auto-rows: auto;
        grid-row-gap: .3rem;
        grid-column-gap: .3rem;
        
        @media (min-width: 798px) {
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
        '#b6940e',
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