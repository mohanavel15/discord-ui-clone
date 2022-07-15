import React from 'react';
import Home from './components/home';
import ServerBar from './components/serverbar';
import SideBar from './components/sidebar';

function App() {
  return (
    <div className="flex flex-row min-h-screen min-w-full">
      <ServerBar />
      <SideBar />
      <Home />
    </div>
  );
}

export default App;
