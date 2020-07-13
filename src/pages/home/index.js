import React from 'react'
import { inject, observer } from 'mobx-react'
import store from '../../store';

@inject('store') @observer
class Home extends React.Component {

  state = {
  }

  handleTodos = () => {
    
  }

  render() {
    return (
      <div className='home'>
        <h1>Mobx</h1>
        <div>{store.time}</div>
        <button onClick={this.handleTodos}>增加一条任务</button>
      </div>
    )
  }
}

export default Home;