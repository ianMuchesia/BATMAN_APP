import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Create } from "./pages";
import { Footer, Navbar } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Create" element={<Create />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
