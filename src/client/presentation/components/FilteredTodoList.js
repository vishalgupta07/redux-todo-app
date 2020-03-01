import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { visibilityFilters } from '../../business/constants';
import { removeTodo, toggleTodo } from '../../business/actionCreator/actionCreator';

@connect(
    (state) => ({
        todoList: state.todoList,
        visibilityFilter: state.visibilityFilter
    }),
    (dispatch) => ({
        removeTodo: (todoId) => dispatch(removeTodo(todoId)),
        toggleTodo: (todoId) => dispatch(toggleTodo(todoId))
    })
)
class FilteredTodoList extends React.Component {
    static propTypes = {
        todoList: PropTypes.array,
        visibilityFilter: PropTypes.string,
        removeTodo: PropTypes.func,
        toggleTodo: PropTypes.func
    };

    render() {
        let visibleTodoList = [];
        switch (this.props.visibilityFilter) {
            case visibilityFilters.SHOW_ALL: {
                visibleTodoList = this.props.todoList;
                break;
            }
            case visibilityFilters.SHOW_ACTIVE: {
                visibleTodoList = this.props.todoList.filter(todo => !todo.completed);
                break;
            }
            case visibilityFilters.SHOW_COMPLETED: {
                visibleTodoList = this.props.todoList.filter(todo => todo.completed);
                break;
            }
        }
        const visibleTodoListJSX = visibleTodoList.map((todo, index) => {
            return (
                <li
                    key={`visible-todo-list-item-${index}`}
                    onClick={() => this._handleFilteredTodoListItemClick(todo.id)}
                    className={todo.completed ? "completed-todo":""}
                >
                    {todo.todoText}
                </li>
            )
        });
        return <ul className="visible-todo-list">{visibleTodoListJSX}</ul>;
    }

    _handleDeleteTodoClick(todoId) {
        this.props.removeTodo(todoId);
    }

    _handleFilteredTodoListItemClick(todoId) {
        this.props.toggleTodo(todoId);
    }
}

export default FilteredTodoList;