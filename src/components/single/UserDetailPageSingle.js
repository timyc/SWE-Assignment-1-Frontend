import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import UserProfileWidget from './UserProfileWidgetSingle';
import UserPostsWidget from './UserPostsWidgetSingle';
import UserAlbumsWidget from './UserAlbumWidgetSingle';

export default class UserDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: null,
            pOpen: false,
            aOpen: false
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.User.id !== prevProps.User.id) {
            this.setState({pOpen: false});
            this.setState({aOpen: false});
        }

    }

    render() {
        //console.log(this.props);
        return (
            <>
                <UserProfileWidget User={this.props.User.id}/> 
                {
                    this.props.User.id != null &&
                    <Button
                        onClick={() => this.setState({pOpen: !this.state.pOpen})}
                        aria-controls="userPosts"
                        aria-expanded={this.state.pOpen}
                    >Posts
                    </Button>
                }
                
                    {' '}
                {
                    this.props.User.id != null &&
                    <Button
                        onClick={() => this.setState({aOpen: !this.state.aOpen})}
                        aria-controls="userPosts"
                        aria-expanded={this.state.aOpen}
                    >
                        Albums
                    </Button>
                }
                <Collapse in={this.state.pOpen}>
                    <div id="userPosts">
                        <UserPostsWidget User={this.props.User.id}/>
                    </div>
                </Collapse>
                <Collapse in={this.state.aOpen}>
                    <div id="userAlbums">
                        <UserAlbumsWidget User={this.props.User.id}/>
                    </div>
                </Collapse>
            </>
            
        );
    }
}

