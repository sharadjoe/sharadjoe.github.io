import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>HomePage</h1>
        <div>
          <Link to="/signup">Signup</Link> or <Link to="/login">Login</Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
