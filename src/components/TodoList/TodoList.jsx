import TodoItem from './TodoItem/TodoItem.jsx';
import './TodoList.css'

function TodoList({ todos }) {
    return (
        <div className="todo-list">
            {
                todos.map(todo => {
                    return (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                        />
                    )
                })
            }
        </div>
    )
}

export default TodoList