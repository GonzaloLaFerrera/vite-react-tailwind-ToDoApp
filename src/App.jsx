import { useState } from "react";
import Header from "./comoponents/Header";
import TodoComputed from "./comoponents/TodoComputed";
import TodoCreate from "./comoponents/TodoCreate";
import TodoFilter from "./comoponents/TodoFilter";
import TodoList from "./comoponents/TodoList";


const initialStateTodos = [
  {
    id: 1,
    title: 'Complete online Javascript curse',
    complete: true,
  },
  {
    id: 2,
    title: 'Jog around the park 3x',
    complete: false,
  },
  {
    id: 3,
    title: '10 minutes meditation',
    complete: false,
  },
  {
    id: 4,
    title: 'Read for 1 hour',
    complete: false,
  },
];

const App = () => {

  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      complete: false,
    }

    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, complete: !todo.complete} : todo));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const computedItemsleft = todos.filter((todo) => !todo.complete).length;

  const clearComplete = (complete) => {
    setTodos(todos.filter((todo) => !todo.complete))
  };

  const [filter, setFilter] = useState('all');
  
  const filteredTodos = () => {
    switch(filter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter((todo) => !todo.complete);
      case 'completed': 
        return todos.filter((todo) => todo.complete);
      default:
        return todos; 
    }
  };

  const changeFilter = (filter) => {setFilter(filter)};


  return(
    <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain">
      
      <Header />

      <main className="container mx-auto mt-8 px-4">         
        <TodoCreate createTodo={createTodo}/>

        {/* TodoList (TodoItem) TodoUpdate & TodoDelete */}
        <TodoList 
          todos={filteredTodos()} 
          updateTodo={updateTodo} 
          removeTodo={removeTodo}
        />

        <TodoComputed 
          computedItemsleft={computedItemsleft} 
          clearComplete={clearComplete}
        />

        <TodoFilter changeFilter={changeFilter} filter={filter}/>
      </main>

      <footer className="text-center mt-8">Drag and drop to re-order list</footer>
    </div>
  )
};

export default App;