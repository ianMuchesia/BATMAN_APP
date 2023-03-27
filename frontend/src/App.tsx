import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Create, SignUp, Profile, Login } from "./pages";
import { Footer, Navbar } from "./components";
import { useAppSelector } from "./hooks/reduxHooks";
import { Toast } from "./@types/toast";

function App() {
  const auth = useAppSelector(state=>state.auth)

const toastDetails:Toast = useAppSelector(state=>state.toast)
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
         <Route path="/" element={<Home />} /> 
        <Route path="Create" element={<Create />} />
        <Route path="Login" element={<Login toastDetails={toastDetails}/>} />
        <Route path="Profile" element={<Profile />} />
        <Route path="SignUp" element={<SignUp toastDetails={toastDetails} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
