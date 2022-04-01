import UserListSingle from './components/single/UserListSingle';
import UserDetailPageSingle from './components/single/UserDetailPageSingle';
import OnePager from './components/OnePager';
import RouterHelper from './components/RouterHelper';
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
            <Route path='/separate' element={<RouterHelper Component={UserListSingle} />} />
            <Route path='/user/:id' element={<RouterHelper Component={UserDetailPageSingle} />} />
        </Routes>
      </Router>
    );
  }
}


