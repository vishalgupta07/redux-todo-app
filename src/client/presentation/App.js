import React from 'react';
import './scss/todoComponents.scss';
import AddTodo from './components/AddTodo';
import FilteredTodoList from './components/FilteredTodoList';
import FilterLinkSection from './components/FilterLinkSection';

function App () {
    return (
        <div>
            <p style={{padding: '10px 0 10px 0', textAlign: 'center'}}>Simple Todo App in Redux</p>
            <FilterLinkSection />
            <AddTodo />
            <FilteredTodoList />
        </div>
    )
}

export default App;
