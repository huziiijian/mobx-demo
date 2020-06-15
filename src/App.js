import React from 'react';
import './App.css';
import store from './store/index'
import { Provider } from 'mobx-react'
import Home from './pages/home'

const App = () => {
  console.log("work")
  return (
    <div className="App">
      <Provider store={store}>
      <Home/>
      </Provider>
    </div>
  );
}

export default App;
