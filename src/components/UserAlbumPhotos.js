import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import ListGroup from 'react-bootstrap/ListGroup';

export default class UserAlbumPhotos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Photos: null
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.AID !== prevProps.AID)
            this.fetchPhotos();
    }

    componentDidMount() {
        this.fetchPhotos();
    }

    fetchPhotos = async() => {
        let aid = this.props.AID;
        let results = await fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + aid);
        let data = await results.json();
        //console.log(data)
        this.setState({
            Photos: data
        });
    }

    render() {
        const list = this.state.Photos?.map(entry => (
            <Figure.Image key={entry.id} src={entry.thumbnailUrl}/>
        ));
        return (
            <Card id="profileWidget" className="border-0">
                <Figure>
                    {list}
                </Figure>
            </Card>
        );
    }
}

