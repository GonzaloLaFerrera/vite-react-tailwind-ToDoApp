import { Droppable, Draggable } from "@hello-pangea/dnd";

import TodoItem from "./TodoItem";

const TodoList = ({todos, updateTodo, removeTodo}) => {
    return(
      <Droppable droppableId="todos">
        {
          (droppableProvided) => (
            <div 
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps} 
              className="mt-8 bg-white rounded-t-md [&>article]:px-2 overflow-hidden transition-all duration-1000 dark:bg-gray-700"
            >          
          
              { todos.map((todo, index) => (
                <Draggable key={todo.id} index={index} draggableId= {`${todo.id}`}>
                    {
                      (draggableProvided) => (
                        <TodoItem                       
                        todo={todo} 
                        updateTodo={updateTodo} 
                        removeTodo={removeTodo}
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.dragHandleProps}
                        {...draggableProvided.draggableProps}
                        />
                      )
                    }
                </Draggable>
              ))}
              {droppableProvided.placeholder}
            </div>
          )
        }
      </Droppable>
    );
};

export default TodoList;