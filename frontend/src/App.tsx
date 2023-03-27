import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Create, SignUp, Profile, Login } from "./pages";
import { Footer, Navbar } from "./components";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks";
import { Toast } from "./@types/toast";
import { setLogin } from "./store/authSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useAppDispatch()
  const auth = useAppSelector(state=>state.auth)
console.log(auth)

const userDataStringified : string| null = localStorage.getItem('userToken')

useEffect(() => {
  const userDataStringified: string | null = localStorage.getItem('userToken');
  if (userDataStringified !== null) {
    const userData = JSON.parse(userDataStringified);
    dispatch(
      setLogin({
        user: userData.user.name,
        token: userData.token,
      })
    );
  }
}, [dispatch]);


const toastDetails:Toast = useAppSelector(state=>state.toast)








  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
         <Route path="/" element={<Home  auth={auth}/>} /> 
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
