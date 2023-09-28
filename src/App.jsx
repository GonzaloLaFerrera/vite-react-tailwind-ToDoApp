import CrossIcon from "./comoponents/icons/CrossIcon";
import MoonIcon from "./comoponents/icons/MoonIcon";

const App = () => {
  return(
    <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">Todo</h1>
          <button className="text-white">
              <MoonIcon className='fill-red-400'/>
          </button>
        </div>
        <form className="flex items-center gap-2 overflow-hidden rounded-md bg-white mt-8 py-2 px-2">
          <span className="inline-block rounded-full h-5 w-5 border-2"></span>
          <input className="w-full outline-none text-gray-400" type="text" placeholder="Create a new to do..." />
        </form>
      </header>

      <main className="container mx-auto mt-4 px-4">
        <div className="bg-white rounded-md [&>article]:px-2">
          
          <article className="flex gap-2 py-2 border-b border-b-gray-300">
            <button className="flex-none inline-block rounded-full h-5 w-5 border-2"></button>
            <p className="grow text-gray-600">Completar el curso de Javascript</p>
            <button className="flex-none"><CrossIcon /></button>
          </article>

          <article className="flex gap-2 py-2 border-b border-b-gray-300">
            <button className="flex-none inline-block rounded-full h-5 w-5 border-2"></button>
            <p className="grow text-gray-600">Completar el curso de Javascript</p>
            <button className="flex-none"><CrossIcon /></button>
          </article>

          <article className="flex gap-2 py-2 border-b border-b-gray-300">
            <button className="flex-none inline-block rounded-full h-5 w-5 border-2"></button>
            <p className="grow text-gray-600">Completar el curso de Javascript</p>
            <button className="flex-none"><CrossIcon /></button>
          </article>
          
          
          <section className="flex justify-between container mx-auto py-2 px-4">
            <span className="text-gray-500">5 items left</span>
            <button className="text-gray-500">Clear Complete</button>
          </section>

        </div>
      </main>

      <section className="container mx-auto px-4 mt-8">
        <div className="flex justify-center gap-2 bg-white p-2 rounded-md text-gray-500">
          <button className="hover:text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>

      <p className="text-center">Drag and drop to reoder list</p>
    </div>
  )
};

export default App;