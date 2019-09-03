import React, { Component } from 'react';
import App from './app'

class TodoList extends Component {

    render() { 
        return ( 
            <div className="todolist-index">
               <App></App>
            </div>
         );
    }
}
 
export default TodoList;