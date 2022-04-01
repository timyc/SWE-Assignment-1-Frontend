import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import UserPostsComments from './UserPostsComments';

export default class UserProfileWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Posts: null,
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.User !== prevProps.User)
            this.fetchPosts();
    }

    fetchPosts = async() => {
        let user = this.props.User;
        let results = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + user);
        let data = await results.json();
        this.setState({
            Posts: data
        });
    }

    render() {
        const list = this.state.Posts?.map(entry => (
            <ListGroup.Item key={entry.id}>
                <h3>{entry.title}</h3>
                <p>{entry.body}</p>
                <UserPostsComments PID = {entry.id}/>
            </ListGroup.Item>
        ));
        return (
            // Don't want to render anything initially, so check if the user is currently null
            <Card id="profileWidget" className="border-0">
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Search for posts"
                    aria-label="Search"
                    />
                </InputGroup>
                <ListGroup>
                    {list}
                </ListGroup>
            </Card>
        );
    }
}

