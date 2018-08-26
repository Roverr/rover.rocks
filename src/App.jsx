import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Row } from 'reactstrap';

import Pages from './pages/pages';

import Header from './components/Header';
import Home from './pages/Home';

import { Content as godeContent } from './pages/golang-debug';
import { ContainerNice, ColNice } from './styles';

const BottomMarginDiv = styled.div`
    margin-bottom: 1.5em;
`;

export default class App extends React.Component {
    render() {
        const pages = new Pages();
        return (
            <ContainerNice>
                <Row>
                    <ColNice md={{ size: 8, offset: 2 }}>
                        <Router>
                            <div>
                                <BottomMarginDiv>
                                    <Header/>
                                </BottomMarginDiv>
                                <Route exact path="/" render={() => {
                                    return <Home pages={pages}/>
                                }}/>
                                <Route path="/articles/golang-debug" component={godeContent}/>
                            </div>
                        </Router>
                    </ColNice>
                </Row>
            </ContainerNice>
        );
    }
}