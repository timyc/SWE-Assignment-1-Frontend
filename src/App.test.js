import { render, screen } from '@testing-library/react';
import App from './App';
import UserListSingle from './components/single/UserListSingle';
import UserDetailPage from './components/UserDetailPage';

test('Tests if the header is properly rendered', () => {
  render(<App />);
  const linkElement = screen.getByText(/One Pager/i);
  expect(linkElement).toBeInTheDocument();
});

// This test will have to wait a little before so the data can load
test('JSON Test for User List', () => {
  render(<UserListSingle />);
  setTimeout( function() {
    const linkElement = screen.getByText(/Graham/i);
    expect(linkElement).toBeInTheDocument();
  }, 2000);
  
});

test('JSON Test for User Detail Name', () => {
  render(<UserDetailPage User={3} />);
  setTimeout( function() {
    const linkElement = screen.getByText(/Clementine/i);
    expect(linkElement).toBeInTheDocument();
  }, 2000);
  
});