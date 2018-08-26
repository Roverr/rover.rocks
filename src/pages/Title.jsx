import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';

import { TitleText } from './styles';
import WhiteChip from '../components/WhiteChip';

const SummaryRow = styled(Row)`
    margin-bottom: 1em;
    margin-top: 5px;
`;

const CoolCol = styled(Col)`
    padding-left: 25px;
    padding-right: 20px;
    &:hover {
        border-radius: 10px;
        border: 1px black #b2bec3;
        overflow: hidden
        background-color: #b2bec3;
        cursor: pointer;
    }
`;

class Title extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            path: '/',
            filteringTags: [],
        };
    }
    getSummary() {
        return this.props.summary ? <Row><p>{this.props.summary}</p></Row> : (null);
    }
    getClickFn(tagName) {
        return () => this.props.filterFn(tagName);
    }
    divClicker(e) {
        if (e.target.className.includes('Mui')) {
            return;
        }
        this.setState({ redirect: true, path: `/articles/${this.props.path}` });
    }
    render() {
        if (!this.props.tags || !this.props.title || !this.props.summary || !this.props.date) {
            return (null);
        }
        if (this.state.redirect) {
            return <Redirect to={this.state.path}/>
        }
        return (
            <CoolCol onClick={this.divClicker.bind(this)}>
                <Row>
                    <TitleText>{this.props.title}</TitleText>
                </Row>            
                <Row>
                    <small>{this.props.date}</small>
                </Row>
                <SummaryRow>
                    {this.props.tags.map((current, i) => {
                        return <WhiteChip
                                    key={i}
                                    tag={current}
                                    onClick={this.getClickFn(current).bind(this)}
                                />
                    })}
                </SummaryRow>
                    {this.getSummary()}
            </CoolCol>
        );
    }
}

export default withRouter(Title);