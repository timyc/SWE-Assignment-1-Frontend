import UserListSingle from './components/UserListSingle';
import OnePager from './components/OnePager';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log(this.state.currentUser)
    return (
      <Router>
        <Routes>
            <Route exact path='/' element={<OnePager />} />
            <Route path='/separate' element={<UserListSingle />} />
        </Routes>
      </Router>
    );
  }
}


