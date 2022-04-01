import React, {Component} from 'react';
import {useNavigate} from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

export default class UserList extends Component {
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
        let results = await fetch('https://jsonplaceholder.typicode.com/users');
        
        let data = await results.json();
        //console.log(data)
        this.setState({
            Data: data
        });
    }

    render() {
        //console.log(this.props.User)
        const list = this.state.Data?.map(entry => (
            <ListGroup.Item key={entry.id} data-bs-toggle="tooltip" data-bs-placement="right" 
            title={"Username: " + entry.username +  "\nEmail: " + entry.email} action onClick = {() => this.props.navigate("/user/" + entry.id)}>
                {entry.name}
            </ListGroup.Item>
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

