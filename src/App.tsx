import React from 'react';
import Greeting from './components/Greeting';

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <Greeting name="John" />
    </div>
  );
};

export default App;
