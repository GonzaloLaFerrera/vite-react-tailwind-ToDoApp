const TodoFilter = ({changeFilter, filter}) => {
    return (
        <section className="container mx-auto mt-8">
            <div className="flex justify-center gap-2 bg-white p-2 rounded-md text-gray-500">
              
              <button 
                onClick={() => changeFilter('all')} 
                className={`${
                              filter === 'all' 
                                ? 'text-blue-600 hover:text-gray-500' 
                                : 'text-gray-500 hover:text-blue-600 hover:font-bold'
                }`}
              >
                All
              </button>
              
              <button 
                onClick={() => changeFilter('active')} 
                className={`${filter === 'active' ? 'text-blue-600 hover:text-gray-500' : 'text-gray-500 hover:text-blue-600 hover:font-bold'}`}
              >
                Active
              </button>
              
              <button 
                onClick={() => changeFilter('completed')} 
                className={`${filter === 'completed' ? 'text-blue-600 hover:text-gray-500' : 'text-gray-500 hover:text-blue-600 hover:font-bold'}`}
              >
                Completed
              </button>

            </div>
          </section>
    );
};

export default TodoFilter;