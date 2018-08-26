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

injectGlobal`
    body {
        background-color: #b2bec3;
        font-family: Merriweather;
        font-weight: 400;
    }
`;