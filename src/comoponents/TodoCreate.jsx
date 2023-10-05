import { useState } from "react";

const TodoCreate = ({ createTodo }) => {

  const [title, setTitle] = useState('');

  const handleSubmitAddToDo = (e) => {
    e.preventDefault();

    if (!title.trim()){
      setTitle('');
    } else {
      createTodo(title);
      setTitle('');
    }

  };

    return(
        <form 
          onSubmit={handleSubmitAddToDo}
          className="flex items-center gap-2 overflow-hidden rounded-md bg-white dark:bg-gray-700 py-2 px-2 transition-all duration-1000"
        >
          <span className="inline-block rounded-full h-5 w-5 border-2"></span>
          <input 
            className="w-full outline-none text-gray-400 dark:bg-gray-700 transition-all duration-1000" 
            type="text" 
            placeholder="Crear nueva tarea 'to do'..."
            value={title}
            onChange={(e) => setTitle(e.target.value) } 
          />
        </form>
    )
};

export default TodoCreate;