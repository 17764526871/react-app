import React from 'react'
// 导入子组件
import {PageHeader } from 'antd';
import AddTodo from './header'
import TodoList from './todolist'
import Footer from './footer'


const App = () => (
    <div className="todoApp">
        <AddTodo></AddTodo>
        <Footer></Footer>
        <TodoList></TodoList>
    </div>
)

export default App
