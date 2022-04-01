import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import UserAlbumsWidgetHelper from '../UserAlbumsWidgetHelper';

export default class UserAlbumsWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Albums: null,
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.User !== prevProps.User)
            this.fetchAlbums();
    }

    componentDidMount() {
        this.fetchAlbums();
    }

    fetchAlbums = async() => {
        let user = this.props.User;
        let results = await fetch('https://jsonplaceholder.typicode.com/albums?userId=' + user);
        let data = await results.json();
        this.setState({
            Albums: data
        });
    }

    render() {
        const list = this.state.Albums?.map(entry => (
            <UserAlbumsWidgetHelper key={entry.id} AID={entry.id} TITLE={entry.title}/>
        ));
        return (

            <Card id="albumWidget" className="border-0">
                <ListGroup>
                    {list}
                </ListGroup>
            </Card>
        );
    }
}

