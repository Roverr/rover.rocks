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
    constructor(props) {
        super(props);
        this.pages = new Pages();
    }
    getArticleRoutes() {
        return this.pages.articles.map((current, i) => {
            const meta = current.meta;
            return <Route
                        key={i}
                        path={"/articles/" + current.path}
                        render={() => <current.component title={meta.title} date={meta.date}/>}
                    />;
        });
    }
    render() {
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
                                    return <Home pages={this.pages}/>
                                }}/>
                                {this.getArticleRoutes()}
                            </div>
                        </Router>
                    </ColNice>
                </Row>
            </ContainerNice>
        );
    }
}