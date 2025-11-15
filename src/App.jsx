
import Navbar from './Navbar';
import Home from './Pages/Home';
import React from 'react';
import Wsport from './Pages/Wsport'

const App = () => {
  return (
  <div className="w-full overflow-x-hidden">
      <Navbar />
      <Home />
      <Wsport />
    </div>
  )
};

export default App;


