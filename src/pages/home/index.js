import React from 'react'
import { inject, observer } from 'mobx-react'
import store from '../../store';
import './style.css'

@inject('store') @observer
class Home extends React.Component {

  state = {
    add: 'add',
    delete: 'delete',
    reset: 'reset'
  }

  handleTodos = (type) => {
    let { store } = this.props;
    switch (type) {
      case 'add':
        store.addTodo('一条新任务')
        break;
      case 'delete':
        store.deleteTodo()
        break;
      case 'reset':
        store.resetTodo()
        break;
      default:
    }
  }

  render() {
    return (
      <div className='home'>
        <h1>Mobx</h1>
        <div>{store.desc}</div>
        <button onClick={() => this.handleTodos(this.state.add)}>增加一条任务</button>
        <button onClick={() => this.handleTodos(this.state.delete)}>删除一条任务</button>
        <button onClick={() => this.handleTodos(this.state.reset)}>任务重置</button>
        {
          store.todos.map((ele, index, arr) => {
            return (
              <div key={index}>{ele}</div>
            )
          })
        }
      </div>
    )
  }
}

export default Home;