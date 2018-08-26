import { Container, Col } from 'reactstrap';
import styled, { injectGlobal } from 'styled-components';

export const ColNice = styled(Col)`
    background-color: #dfe6e9;
    padding-bottom: 1em;
    margin-bottom: 3em;
`;

export const ContainerNice = styled(Container)`
    margin-top: 3em;
`;

export const TitleText = styled.h2`
    margin-top: 1em;
    font-family: Merriweather;
    font-weight: 900;
    font-size: 1.4427rem;
`;

export const FocusedTitleText = styled.h1`
    font-family: Merriweather;
    font-weight: 900;
    font-size: 2.5rem;
`;

export const HeadTextMerri = styled.h2`
    font-family: Merriweather;
    font-weight: 900;
    font-size: 1.73286rem;
`;

export const ImageCol = styled(Col)`
    text-align: center;
    margin-bottom: 1em;
`;

injectGlobal`
    body {
        background-color: #b2bec3;
        font-family: Merriweather;
        font-weight: 400;
    }
`;