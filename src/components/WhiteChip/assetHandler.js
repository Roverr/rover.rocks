import _ from 'lodash';

import debug from './assets/debug.png';
import golang from './assets/gopher.png';
import business from './assets/business.png';
import design from './assets/design.jpg';
import javascript from './assets/javascript.png';
import nodejs from './assets/nodejs.png';

export function getPic(name) {
    const tagName = _.toLower(name);
    if (tagName === 'debug') {
        return debug;
    }
    if (tagName === 'golang' || tagName === 'go') {
        return golang;
    }
    if (tagName === 'js' || tagName === 'javascript') {
        return javascript;
    }
    if (tagName === 'design') {
        return design;
    }
    if (tagName === 'business') {
        return business;
    }
    if (tagName === 'nodejs' || tagName === 'node.js') {
        return nodejs;
    }
    return '';
}

export function getLabelByPicture(pic) {
    if (pic === debug) {
        return 'Debug';
    }
    if (pic === golang) {
        return 'Golang';
    }
    if (pic === javascript) {
        return 'JavaScript';
    }
    if (pic === design) {
        return 'Design';
    }
    if (pic === business) {
        return 'Business';
    }
    if (pic === nodejs) {
        return 'Node.JS';
    }
}