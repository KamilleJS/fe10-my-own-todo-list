import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

function Todo(props) {

    const {todo = {}} = props;

    const deleteButtonHandler = () => {
        props.deleteTodo(todo.id);
    }

    return (
        <div>
            {todo.title}
            {' '}
            <button onClick={deleteButtonHandler} type="button" className="btn btn-outline-dark btn-sm">delete</button>
            <button  type="button" className="btn btn-outline-dark btn-sm">update</button>
        </div>
    );
}

export default Todo;
