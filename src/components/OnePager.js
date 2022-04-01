import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from './Header';
import UserList from './UserList';
import UserDetailPage from './UserDetailPage';
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  changeUser = (uid) => {
    this.setState({currentUser: uid});
  }

  render() {
    //console.log(this.state.currentUser)
    return (
      <Container fluid>
        <Header />
        {/* App will have 1 row with 2 columns (userlist, user detail page) */}
        <Row>
          <Col sm={4}>
            <UserList User={this.changeUser} />
          </Col>
          <Col sm={8}>
            <UserDetailPage User={this.state.currentUser} />
          </Col>
        </Row>
      </Container>
    );
  }
}


