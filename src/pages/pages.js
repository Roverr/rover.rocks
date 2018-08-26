import { Meta as godeMeta } from './golang-debug';
import { Meta as gobuMeta } from './golang-business';
import { Meta as cvMeta } from './cv-figma';


export default class Pages{
    constructor() {
        this.articles = [
            {
                name: 'CV Figma',
                path: 'cv-figma',
                meta: cvMeta,
            },
            {
                name: 'Golang business',
                path: 'golang-business',
                meta: gobuMeta,
            },
            {
                name: 'Golang debug',
                path: 'golang-debug',
                meta: godeMeta,
            },
        ];
    }
}
