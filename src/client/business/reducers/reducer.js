import { combineReducers } from 'redux';
import produce from 'immer';
import _ from 'lodash';

import { todoActions, visibilityFilters } from '../constants';

const initialState = {
    todoList: [],
    todoText: '',
    visibilityFilter: visibilityFilters.SHOW_ALL,
};

const todoList = (state = initialState.todoList, action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case todoActions.ADD_TODO: {
                draft.push({
                    id: draft.length,
                    todoText: action.payload.todoText,
                    completed: false
                });
                break;
            }
            case todoActions.REMOVE_TODO: {
                _.remove(draft, todo => todo.id === action.payload.id);
                break;
            }
            case todoActions.TOGGLE_TODO: {
                const todoTobeToggled = _.find(draft, todo => todo.id === action.payload.id);
                todoTobeToggled.completed = !todoTobeToggled.completed;
                break;
            }
            default: {
                break;
            }
        }
    });

const todoText = (state = initialState.todoText, action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case todoActions.SET_TODO_TEXT: {
                return action.payload.todoText;
            }
            default: {
                break;
            }
        }
    });


const visibilityFilter = (state = initialState.visibilityFilter, action) =>
    produce(state, (draft) => {
        switch (action.type) {
            case todoActions.SET_VISIBILITY_FILTER: {
                return action.payload.visibilityFilter;
            }
            default: {
                break;
            }
        }
    });

export const reducer = combineReducers({
    todoList,
    todoText,
    visibilityFilter
});
