import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

const style = {
    'textDecoration': 'line-through'
}

function Todo(props) {

    const {todo = {}} = props;
    const {done} = todo;

    const isDone = done ? style : {};

    return (
        <div style={isDone}>
            {todo.title}
            {' '}
            <button onClick={() => props.deleteTodo(todo.id)} type="button" className="btn btn-outline-dark btn-sm">delete</button>
            <button onClick={() => props.updateTodo(todo.id)} type="button" className="btn btn-outline-dark btn-sm">update</button>
        </div>
    );
}

export default Todo;
