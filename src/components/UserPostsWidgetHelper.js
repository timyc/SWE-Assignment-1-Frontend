import React, {Component} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import UserPostsComments from './UserPostsComments';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';

export default class UserProfileWidgetHelper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Deleted: false,
            SelfTitle: props.TITLE,
            SelfBody: props.BODY
        };
    }

    deleteSelf() {
        try {
            this.setState({Deleted: !this.state.Deleted});
            fetch('https://jsonplaceholder.typicode.com/comments/' + this.props.CID, {method: 'DELETE'})
        } catch (e) {
            alert('Failed to delete post');
        }
        
    }

    updateBody(event) {
        const val = event.target.value;
        this.setState({
            SelfBody: val
        });
    }

    updateTitle(event) {
        const val = event.target.value;
        this.setState({
            SelfTitle: val
        });
    }

    updatePost() {
        try {
            fetch('https://jsonplaceholder.typicode.com/posts/' + this.props.PID, {
                method: 'PUT',
                body: JSON.stringify({
                    id: this.props.PID,
                    title: this.state.SelfTitle,
                    body: this.state.SelfBody,
                    userId: this.props.USERID,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
        } catch (e) {
            alert('Failed to update post');
        }
        
    }

    deletePost() {

    }

    render() {
        if (this.state.Deleted) {
            return null
        } else {
            return (
                <ListGroup.Item key={this.props.PID}>
                    <InputGroup className="mb-3">
                        <FormControl value={this.state.SelfTitle} onChange={event => this.updateTitle(event)} />
                    </InputGroup>
                    <InputGroup>
                        <FormControl as="textarea" value={this.state.SelfBody} onChange={event => this.updateBody(event)} />
                        <Button variant="outline-secondary" onClick={() => this.updatePost()}>
                            Update
                        </Button>
                    </InputGroup><br />
                    <h3>Comments</h3>
                    <UserPostsComments PID = {this.props.PID}/>
                </ListGroup.Item>
            );
        }
    }
}

