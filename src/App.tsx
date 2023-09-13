import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Main } from './main';
import { ContextAPI } from './context/context';

function App() {
  return (
    <div className="">
      <ContextAPI>
      <Main/>
      </ContextAPI>
    </div>
  );
}

export default App;
