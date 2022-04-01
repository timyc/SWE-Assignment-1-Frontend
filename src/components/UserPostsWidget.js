import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import UserPostsWidgetHelper from './UserPostsWidgetHelper';

export default class UserProfileWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Posts: null,
            Query: ''
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.User !== prevProps.User)
            this.fetchPosts();
    }

    fetchPosts = async() => {
        try {
            let user = this.props.User;
            let results = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + user);
            let data = await results.json();
            this.setState({
                Posts: data
            });
        } catch (e) {
            alert(e);
        }
        
    }

    searchPosts() {
        //console.log('searching');
        window.find(this.state.Query);
    }

    updateQuery(event) {
        const val = event.target.value;
        this.setState({Query: val});
    }

    render() {
        const list = this.state.Posts?.map(entry => (
            <UserPostsWidgetHelper key={entry.id} PID={entry.id} TITLE={entry.title} BODY={entry.body} USERID = {entry.userId} />
        ));
        return (
            // Don't want to render anything initially, so check if the user is currently null
            <Card id="profileWidget" className="border-0">
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Search for posts"
                    aria-label="Search"
                    onChange={event => {this.updateQuery(event)}}
                    onKeyPress={event => {
                            if (event.key === 'Enter') {
                            this.searchPosts()
                            }
                        }}
                    />
                </InputGroup>
                <ListGroup>
                    {list}
                </ListGroup>
            </Card>
        );
    }
}

