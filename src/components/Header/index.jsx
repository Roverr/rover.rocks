import React from 'react';
import styled from 'styled-components';
import { LinkContainer } from 'react-router-bootstrap';

import Self from './Self';

const StyledSelf = styled(Self)`
    margin-bottom: 1em;
`;

const HeadText = styled.h1`
    border-bottom: 5px solid #3f51b5;
    font-weight: 900;
    font-size: 3.95285em;
    font-family: 'Playfair Display';
    &:hover {
        cursor: pointer;
    }
`;

export default class Header extends React.Component{
    render() {
        return [
            <LinkContainer to='/' key={0}>
                <HeadText> Rover's blog </HeadText>
            </LinkContainer>,
            <StyledSelf key={1}/>
        ];
    }
}