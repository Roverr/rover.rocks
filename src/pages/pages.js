import { Meta as godeMeta, Content as godeContent } from './golang-debug';
import { Meta as gobuMeta } from './golang-business';
import { Meta as cvMeta } from './cv-figma';


export default class Pages{
    constructor() {
        this.articles = [
            {
                name: 'CV Figma',
                path: 'cv-figma',
                meta: cvMeta,
                component: godeContent,
            },
            {
                name: 'Golang business',
                path: 'golang-business',
                meta: gobuMeta,
                component: godeContent,
            },
            {
                name: 'Golang debug',
                path: 'golang-debug',
                meta: godeMeta,
                component: godeContent,
            },
        ];
    }
}
