import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

export default class UserProfileWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Deleted: false
        }
    }

    deleteSelf() {
        try {
            this.setState({Deleted: !this.state.Deleted});
            fetch('https://jsonplaceholder.typicode.com/comments/' + this.props.CID, {method: 'DELETE'})
        } catch (e) {
            alert('Failed to delete comment');
        }
        
    }

    render() {
        if (this.state.Deleted) {
            return null;
        } else {
            return (
                <ListGroup.Item key={this.props.CID}>
                    <p>
                        <b>{this.props.NAME}</b><br />
                        <small>{this.props.BODY}</small>
                    </p>
                    From: {this.props.EMAIL}<br />
                    <Button variant="danger" onClick={() => this.deleteSelf()}>Delete</Button>
                </ListGroup.Item>
            );
        }
        
    }
}

