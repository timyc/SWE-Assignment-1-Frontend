import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import UserAlbumPhotos from './UserAlbumPhotos';

export default class UserAlbumsWidgetHelper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Hidden: true,
        };
    }

    showPhotos() {
        this.setState({Hidden: !this.state.Hidden});
    }

    render() {
        return (
            <ListGroup.Item key={this.props.AID} action onClick={() => this.showPhotos()}>
                <h3>{this.props.TITLE}</h3>
                <div id ={"albImg" + this.props.AID}>
                    { this.state.Hidden ? null : <UserAlbumPhotos AID={this.props.AID} />}
                </div>
                
            </ListGroup.Item>
        );
    }
}

