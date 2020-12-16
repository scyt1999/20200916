import {ADD_TODOLIST, DELETE_TODOLIST, FINISH_TODOLIST} from './action'

const initState = {
    todoList: [],
    finishList: [],
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TODOLIST: {
            const tempTodo = [...state.todoList];
            tempTodo.push(action.payload);
            return {
                ...state,
                todoList: tempTodo,
            };
        }
        case FINISH_TODOLIST: {
            const TempFinish = [...state.finishList]
            TempFinish.push(action.payload)
            return {
                ...state,
                finishList: TempFinish
            }
        }
        case DELETE_TODOLIST: {

            const tempTodo = [...state.todoList];
            tempTodo.splice(action.payload, 1)
            return {
              ...state,
              todoList: tempTodo
            }
          }
        default:
            return state;
    }
}

export default reducer