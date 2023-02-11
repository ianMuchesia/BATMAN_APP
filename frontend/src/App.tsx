import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { Home, Create } from "./pages"
import {Batman_homePage} from "./assets"

function App() {


  return (
    <BrowserRouter>
    <header className=" absolute z-10 w-full flex justify-between items-center sm:px-8 px-4 py-4 ">
        <Link to="/">
          <h1 className="text-xl text-gray-100">Batman</h1>
        </Link>
        <Link
          to="Create"
          className="font-inter font-medium bg-red-500  text-white px-4 py-2 rounded-md"
        >
          create
        </Link>

        </header>
    <main  >
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="Create" element={<Create/>}/>
    </Routes>
    </main>
      
    </BrowserRouter>
  )
}

export default App
