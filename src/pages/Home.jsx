import React from 'react';
import _ from 'lodash';
import { Row } from 'reactstrap';

import Title from './Title';
import { TitleText, CoolRow, FilterTagRow } from './styles';
import WhiteChip from '../components/WhiteChip';


export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = { active: props.pages.articles, tag: '' };
    }
    filter(tagName) {
        this.setState({ 
            active: _.filter(this.props.pages.articles, (current) => {
                return _.find(current.meta.tags, (tag) => tag === _.toLower(tagName));
            }),
            tag: tagName,
        });
    }
    getPosts() {
        return this.state.active.map((current, i) => {
            const meta = current.meta;
            return (
                <Title
                    key={i}
                    tags={meta.tags}
                    date={meta.date}
                    title={meta.title}
                    summary={meta.summary}
                    path={current.path}
                    filterFn={this.filter.bind(this)}
                />
            );
        });
    }
    resetTags() {
        this.setState({ 
            active: this.props.pages.articles,
            tag: '',
        });
    }
    tagFilter() {
        if (this.state.active.length === this.props.pages.articles.length) {
            return (null);
        }
        return [
            <CoolRow key="row-0">
                <TitleText> Applied filters: </TitleText>
            </CoolRow>,
            <FilterTagRow key="row-1">
                <WhiteChip tag={this.state.tag} onDelete={this.resetTags.bind(this)}/>
            </FilterTagRow>
        ];
    }
    render() {
        if (!this.props.pages || !this.props.pages.articles) {
            return null;
        }
        return [this.tagFilter()].concat(this.getPosts())
    }
}
