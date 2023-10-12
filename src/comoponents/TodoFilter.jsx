const TodoFilter = ({changeFilter, filter}) => {
    return (
        <section className="container mx-auto mt-8">
            <div className="flex justify-center gap-2 bg-white p-2 rounded-md text-gray-500 dark:bg-gray-700 transition-all duration-1000">
              
              <button 
                onClick={() => changeFilter('all')} 
                className={`${
                              filter === 'all' 
                                ? 'text-blue-600 hover:text-gray-500' 
                                : 'text-gray-500 hover:text-blue-600 hover:font-bold'
                }`}
              >
                Todos
              </button>
              
              <button 
                onClick={() => changeFilter('active')} 
                className={`${filter === 'active' ? 'text-blue-600 hover:text-gray-500' : 'text-gray-500 hover:text-blue-600 hover:font-bold'}`}
              >
                Activos
              </button>
              
              <button 
                onClick={() => changeFilter('completed')} 
                className={`${filter === 'completed' ? 'text-blue-600 hover:text-gray-500' : 'text-gray-500 hover:text-blue-600 hover:font-bold'}`}
              >
                Completados
              </button>

            </div>
          </section>
    );
};

export default TodoFilter;