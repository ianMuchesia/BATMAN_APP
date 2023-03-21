import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Create, SignUp, Profile, Login } from "./pages";
import { Footer, Navbar } from "./components";

function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
         <Route path="/" element={<Home />} /> 
        <Route path="Create" element={<Create />} />
        <Route path="Login" element={<Login />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="SignUp" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
