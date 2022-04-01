import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default class UserAlbumsWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Albums: null,
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.User !== prevProps.User)
            this.fetchPosts();
    }

    fetchPosts = async() => {
        let user = this.props.User;
        let results = await fetch('https://jsonplaceholder.typicode.com/albums?userId=' + user);
        let data = await results.json();
        this.setState({
            Albums: data
        });
    }

    render() {
        const list = this.state.Albums?.map(entry => (
            <ListGroup.Item key={entry.id} action>
                <h3>{entry.id}. {entry.title}</h3>
            </ListGroup.Item>
        ));
        return (
            // Don't want to render anything initially, so check if the user is currently null
            <Card id="albumWidget" className="border-0">
                <ListGroup>
                    {list}
                </ListGroup>
            </Card>
        );
    }
}

