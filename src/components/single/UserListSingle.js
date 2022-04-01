import React, {Component} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default class UserListSingle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: null
        };
    }

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers = async() => {
        try {
            let results = await fetch('https://jsonplaceholder.typicode.com/users');
            
            let data = await results.json();
            //console.log(data)
            this.setState({
                Data: data
            });
        } catch (e) {
            alert(e);
        }
        
    }

    render() {
        //console.log(this.props.User)
        let changeUser = this.props.User;
        const list = this.state.Data?.map(entry => (
            <OverlayTrigger
                key={entry.id}
                placement="bottom"
                overlay={<Tooltip> {"Username: " + entry.username +  " | Email: " + entry.email} </Tooltip>}
            >
                <ListGroup.Item key={entry.id} action onClick = {() => this.props.navigate("/user/" + entry.id)}>
                            {entry.name}
                </ListGroup.Item>
            </OverlayTrigger>
            
        ));
        //const list = "test";
        return (
            // I should use ListGroups which shows the customized UserDetailPage onClick
            <ListGroup>
                {list}
            </ListGroup>
        );
    }
}

