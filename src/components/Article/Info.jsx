import React from 'react';
import styled from 'styled-components';
import { Row } from 'reactstrap';

import { FocusedTitleText } from '../../styles';

const BottomMarginRow = styled(Row)`
    margin-bottom: 1em;
`;

export default class Info extends React.Component{
    render() {
        return [
            <Row key={0}>
                <FocusedTitleText>{this.props.title}</FocusedTitleText>
            </Row>,
            <BottomMarginRow key={1}>
                <small>{this.props.date}</small>
            </BottomMarginRow>
        ];
    }
}