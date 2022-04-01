import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';

export default class UserProfileWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: null
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.User !== prevProps.User)
            this.fetchProfile();
    }

    /*componentDidMount() {
        this.fetchProfile();
    }*/

    fetchProfile = async() => {
        //console.log(this.props.User);
        try {
            let user = this.props.User;
            let results = await fetch('https://jsonplaceholder.typicode.com/users/' + user);
            let data = await results.json();
            // https://jsonplaceholder.typicode.com/comments?postId=
            this.setState({
                Data: data
            });
        } catch (e) {
            alert(e);
        }
        
    }

    render() {
        const userProfile = this.state.Data;
        return (
            
            <Card>
                {userProfile != null && 
                    <p style={{padding: 10}}>
                        <b>User ID:</b> {userProfile.id}<br />
                        <b>Name:</b> {userProfile.name}<br />
                        <b>Username:</b> {userProfile.email}<br />
                        <b>Address:</b> {userProfile.address.street + " " + userProfile.address.suite + ", " + 
                        userProfile.address.city + " " + userProfile.address.zipcode + " (" + 
                        userProfile.address.geo.lat + ", " + userProfile.address.geo.lng + ")"}<br />
                        <b>Phone:</b> {userProfile.phone}<br />
                        <b>Website:</b> {userProfile.website}<br />
                        <b>Company:</b> {userProfile.company.name + ": \""  + userProfile.company.catchPhrase + "\""}<br />
                        <b>Company Goal:</b> {userProfile.company.bs}<br />
                    </p>
                }
            </Card>
        );
    }
}

