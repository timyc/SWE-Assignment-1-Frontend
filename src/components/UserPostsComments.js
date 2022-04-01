import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'

export default class UserProfileWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Comments: null
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.PID !== prevProps.PID)
            this.fetchComments();
    }

    componentDidMount() {
        this.fetchComments();
    }

    fetchComments = async() => {
        let pid = this.props.PID;
        let results = await fetch('https://jsonplaceholder.typicode.com/comments?postId=' + pid);
        let data = await results.json();
        //console.log(data)
        this.setState({
            Comments: data
        });
    }

    render() {
        const list = this.state.Comments?.map(entry => (
            <ListGroup.Item key={entry.id}>
                <p>
                    <b>{entry.name}</b><br />
                    <small>{entry.body}</small>
                </p>
                From: {entry.email}<br />
                <Button variant="danger">Delete</Button>
            </ListGroup.Item>
        ));
        return (
            // Don't want to render anything initially, so check if the user is currently null
            <Card id="commentsWidget" className="border-0">
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Post Comment"
                    aria-label="Comment"
                    />
                    <Button variant="outline-secondary">
                        Comment
                    </Button>
                </InputGroup>
                <ListGroup>
                    {list}
                </ListGroup>
            </Card>
        );
    }
}

