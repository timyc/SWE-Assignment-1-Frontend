import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import UserList from './components/UserList';

function App() {
  return (
    <Container>
      {/* App will have 1 row with 2 columns (userlist, user detail page) */}
      <Row>
        <Col>
          <UserList />
        </Col>
        <Col>
        Some text in column 2
        </Col>
      </Row>
    </Container>
  );
}

export default App;
