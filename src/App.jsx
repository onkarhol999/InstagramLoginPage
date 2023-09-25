import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Signup from './Signup';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Instagram</h1>
      </header>
      <div className="App-body">
        {isLogin ? <Login /> : <Signup />}
        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button onClick={toggleForm}>
            {isLogin ? 'Sign up' : 'Log in'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default App;
