import { todoActions } from '../constants';

export const setVisibilityFilter = (visibilityFilter) => ({
    type: todoActions.SET_VISIBILITY_FILTER,
    payload: {
        visibilityFilter
    }
});

export const setTodoText = (todoText) => ({
   type: todoActions.SET_TODO_TEXT,
   payload: {
       todoText
   }
});

export const addTodo = (todoText) => ({
    type: todoActions.ADD_TODO,
    payload: {
        todoText
    }
});

export const removeTodo = (todoId) => ({
    type: todoActions.REMOVE_TODO,
    payload: {
        id: todoId
    }
});

export const toggleTodo = (todoId) => ({
    type: todoActions.TOGGLE_TODO,
    payload: {
        id: todoId
    }
});