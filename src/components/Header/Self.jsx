import React from 'react';
import { Media } from 'reactstrap';
import SocialMediaIcons from 'react-social-media-icons';

import profilePic from './assets/profile.png';

const imgStyle = {
    maxHeight: '4em',
    maxWidth: '4em',
    marginRight: '2em',
};

export default class Self extends React.Component {
    constructor(props) {
        super(props);
        this.socialMediaIcons = [
            {
              url: 'https://github.com/Roverr',
              className: 'fa-github-square',
            },
            {
              url: 'http://linkedin.rover.rocks',
              className: 'fa-linkedin',
            }];
    }
    render() {
        return (
            <Media>
                <Media left>
                    <Media object style={imgStyle} src={profilePic} alt="profile-picture" />
                </Media>
                <Media body>
                    <Media heading>
                        Written by Imre Levente Rácz
                    </Media>
                    Software engineer and tech enthusiast
                </Media>
                <Media right>
                    <SocialMediaIcons icons={this.socialMediaIcons} iconSize={'1.6em'} iconColor={'#495056'}/>
                </Media>
            </Media>
        );
    }
}