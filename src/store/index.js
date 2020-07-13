
import React from 'react'
import {
    observable,
    action,
    computed
} from 'mobx'
import moment from 'moment'

class AppStore extends React.Component {
    @observable time = '2019'
    @observable todos = []
    @computed get desc() {
        return (
            <div>
                <p>{this.time}</p>
                <p>还有{this.todos.length} 条任务待完成</p>
            </div>
        )
    }
    @action addTodo(todo) {
        this.todos.push(todo)
    }
    @action deleteTodo() {
        this.todos.pop()
    }
    @action resetTodo() {
        this.todos = []
    }
    @action getNow() {
        this.time = moment().format('YYYY-MM-DD HH:mm:ss')
    }
}


const store = new AppStore()

setInterval(() => {
    store.getNow()
}, 1000)

export default store
