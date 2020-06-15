import React from 'react';
import './App.css';
import store from './store/index'
import { Provider } from 'mobx-react'

const App = () => {
  console.log("work")
  return (
    <div className="App">
      <Provider store={store}></Provider>
    </div>
  );
}

export default App;
