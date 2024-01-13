import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page!</h1>
      <p>Click here to check your To-dos:</p>
      <Link to="/todo">Go to Todos</Link>
    </div>
  );
}


export default Home;
