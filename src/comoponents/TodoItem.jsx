import React from "react";
import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";

const TodoItem = React.forwardRef(({todo, updateTodo, removeTodo, ...props}, ref) => {

    const {id, title, complete} = todo;

    return (
        <article {...props} ref={ref} className="flex gap-2 py-2 border-b border-b-gray-300 ">
            <button 
                onClick={() => updateTodo(id)} 
                className={`rounded-full border-2 h-5 w-5 ${complete ? "flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" : "flex-none inline-block"}`}
            >
                { 
                    complete && <IconCheck />
                }
            </button>
            <p className={`grow  ${complete ? 'text-gray-400 line-through dark:text-gray-500' : 'text-gray-600 dark:text-gray-400'}`}>{title}</p>
            <button 
                className="flex-none"
                onClick={() => removeTodo(id)}
            >
                    <IconCross />
            </button>
          </article>
    );
});

export default TodoItem;


