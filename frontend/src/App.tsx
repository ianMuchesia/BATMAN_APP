import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, Create } from "./pages"
function App() {


  return (
    <BrowserRouter>
    <main>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="Create" element={<Create/>}/>
    </Routes>
    </main>
      
    </BrowserRouter>
  )
}

export default App
