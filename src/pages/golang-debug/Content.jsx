import React from 'react';
import { Row, Col } from 'reactstrap';
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';

import { ImageCol, HeadTextMerri } from '../../styles';
import { JustifiedRow } from '../styles';
import Info from '../../components/Article/Info';

import swaggy from './assets/swaggy.jpg';

export class Content extends React.Component{
    render() {
        return (
            <Col>
                <Info title={this.props.title} date={this.props.date}/>
                <JustifiedRow>
                    <p>We already know,
                        that Golang is a blazing fast language with 
                        one of the smoothest learning curve ever.
                        Despite being easy to learn,
                        there are issues which are not trivial to debug in the 
                        language and I feel like memory issues are one of them.
                    </p>
                </JustifiedRow>
                <Row>
                    <ImageCol>
                        <img src={swaggy} className="rounded mx-auto d-block"/>
                    </ImageCol>
                </Row>
                <JustifiedRow>
                    <p>The language utilizes automated garbage collection,
                        so there should be no memory issues then right?
                        Well let’s take a look at a real life example that we encountered with my team.
                    </p>
                </JustifiedRow>
                <Row>
                    <HeadTextMerri>Figuring out that something stinks</HeadTextMerri>
                </Row>
            </Col>
        );
    }
}