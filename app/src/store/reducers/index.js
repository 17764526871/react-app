import {combineReducers} from "redux";
import common from './common-reducers'
import {todos,requestLoading,selectTodo} from './todoReducer'

export default combineReducers({
    common,
    todos,
    isFetchLoading: requestLoading,
    selectTodo: selectTodo
})