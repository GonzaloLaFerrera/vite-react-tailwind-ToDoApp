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
          className="flex items-center gap-2 overflow-hidden rounded-md bg-white  py-2 px-2"
        >
          <span className="inline-block rounded-full h-5 w-5 border-2"></span>
          <input 
            className="w-full outline-none text-gray-400" 
            type="text" 
            placeholder="Create a new to do..."
            value={title}
            onChange={(e) => setTitle(e.target.value) } 
          />
        </form>
    )
};

export default TodoCreate;