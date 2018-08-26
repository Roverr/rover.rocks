import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import { getLabelByPicture, getPic } from './assetHandler';
import { StyledChip } from './styles.js';

export default class WhiteChip extends React.Component{
    render() {
        const picture = getPic(this.props.tag);
        if (this.props.onDelete) {
            return <StyledChip
                        avatar={<Avatar src={picture} />}
                        label={getLabelByPicture(picture)}
                        onDelete={this.props.onDelete}
                    />
        }
        return <StyledChip
                    avatar={<Avatar src={picture} />}
                    label={getLabelByPicture(picture)}
                    onClick={this.props.onClick}
                />
    }
}