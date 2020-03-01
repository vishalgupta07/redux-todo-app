import React from 'react';
import PropTypes from 'prop-types';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';
import { Button, Icon, Input } from 'semantic-ui-react';

import { addTodo, setTodoText } from '../../business/actionCreator/actionCreator';

@connect(
    (state) => ({
        todoText: state.todoText
    }),
    (dispatch) => ({
        setTodoText: (todoText) => dispatch(setTodoText(todoText)),
        addTodo: (todoText) => dispatch(addTodo(todoText))
    })
)
@autobind
class AddTodo extends React.Component {
    static propTypes = {
        todoText: PropTypes.string,
        setTodoText: PropTypes.func,
        addTodo: PropTypes.func
    };

    render() {
        return (
            <div className="add-todo">
                <Input
                    placeholder="Add Todo"
                    value={ this.props.todoText }
                    onChange={ this._handleTodoTextValueChange }
                />
                <Button onClick={ this._handleAddTodoButtonClick }>
                    Add Todo
                </Button>
            </div>
        )
    }

    _handleTodoTextValueChange(event, data) {
        this.props.setTodoText(data.value);
    }

    _handleAddTodoButtonClick() {
        this.props.addTodo(this.props.todoText);
        this.props.setTodoText('');
    }
}

export default AddTodo;