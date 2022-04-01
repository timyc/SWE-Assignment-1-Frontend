import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import UserPostsCommentsHelper from './UserPostsCommentsHelper';

export default class UserProfileWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Comments: null,
            selfEmail: '',
            selfBody: '',
            selfTitle: '',
        };
    }

    /*componentDidUpdate(prevProps) {
        if (this.props.PID !== prevProps.PID)
            this.fetchComments();
    }*/

    componentDidMount() {
        this.fetchComments();
    }

    fetchComments = async() => {
        try {
            let pid = this.props.PID;
            let results = await fetch('https://jsonplaceholder.typicode.com/comments?postId=' + pid);
            let data = await results.json();
            //console.log(data)
            this.setState({
                Comments: data
            });
        } catch (e) {
            alert(e);
        }
        
    }

    addComment = async() => {
        let temp = this.state.Comments;
        let results = await fetch('https://jsonplaceholder.typicode.com/comments', {method: 'POST', body: JSON.stringify({
            postId: this.props.PID,
            name: this.state.selfTitle,
            email: this.state.selfEmail,
            body: this.state.selfBody
        }), headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        let data = await results.json();
        //console.log(data);
        temp.push(data);
        this.setState({
            Comments: temp
        });
    }

    updateBody(event) {
        const val = event.target.value;
        this.setState({
            selfBody: val
        });
    }

    updateTitle(event) {
        const val = event.target.value;
        this.setState({
            selfTitle: val
        });
    }

    updateEmail(event) {
        const val = event.target.value;
        this.setState({
            selfEmail: val
        });
    }

    render() {
        let list = this.state.Comments?.map(entry => (
            <UserPostsCommentsHelper key={entry.id} CID={entry.id} NAME={entry.name} BODY={entry.body} EMAIL={entry.email}/>
        ));
        //console.log(this.state.Comments);
        return (
            <Card id="profileWidget" className="border-0">
                <InputGroup className="mb-3">
                    <FormControl placeholder="Email Address" aria-label="Email" onChange = {event => this.updateEmail(event)} />
                </InputGroup>
                <InputGroup className="mb-3">
                    <FormControl placeholder="Comment Title" aria-label="Title" onChange = {event => this.updateTitle(event)} />
                </InputGroup>
                <InputGroup className="mb-3">
                    <FormControl as="textarea" aria-label="Your Comment" onChange = {event => this.updateBody(event)} />
                    <Button variant="outline-secondary" onClick={() => this.addComment()}>
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

