import './App.css'
import Todo from "./Todo";

function List(props) {

    return (
        <div>
            {props.list.map(el =>
                <Todo todo={el}/>
            )}
        </div>
    );
}

export default List;
