const TodoComputed = ({computedItemsleft, clearComplete}) => {
    return(
        <section className="flex justify-between container mx-auto py-2 px-4 bg-white rounded-b-md dark:bg-gray-700 transition-all duration-1000">
          <span className="text-gray-500">{computedItemsleft} items restantes</span>
          <button 
            className="text-gray-500"
            onClick={clearComplete}
          >
            Limpiar Completados
          </button>
        </section>
    )
};

export default TodoComputed;