import TodoItem from "./TodoItem";

const TodoList = ({todos, updateTodo, removeTodo}) => {
    return(
        <div className="mt-8 bg-white rounded-t-md [&>article]:px-2 ">          
          
          { todos.map((todo) => (
            <TodoItem 
              key={todo.id} 
              todo={todo} 
              updateTodo={updateTodo} 
              removeTodo={removeTodo}
            />
          ))}
        </div>
    );
};

export default TodoList;