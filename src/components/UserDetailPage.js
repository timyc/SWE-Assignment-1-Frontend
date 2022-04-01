import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import UserProfileWidget from './UserProfileWidget';
import UserPostsWidget from './UserPostsWidget';

export default class UserDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: null,
            pOpen: false,
            aOpen: false
        };
    }

    render() {
        return (
            <>
                <UserProfileWidget User={this.props.User}/>
                <Button
                    onClick={() => this.setState({pOpen: !this.state.pOpen})}
                    aria-controls="userPosts"
                    aria-expanded={this.state.pOpen}
                >
                    Posts
                </Button>
                <Button
                    onClick={() => this.setState({aOpen: !this.state.aOpen})}
                    aria-controls="userPosts"
                    aria-expanded={this.state.aOpen}
                >
                    Album
                </Button>
                <Collapse in={this.state.pOpen}>
                <div id="userPosts">
                    <UserPostsWidget User={this.props.User}/>
                </div>
                </Collapse>
            </>
            
        );
    }
}

