import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Create, SignUp, Profile, Login } from "./pages";
import { Footer, Modal, MemoizedNavbar } from "./components";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks";
import { Toast } from "./@types/toast";
import { setLogin } from "./store/authSlice";
import { useEffect, useMemo } from "react";

function App() {
  const dispatch = useAppDispatch();

  const toastDetails: Toast = useAppSelector((state) => state.toast);

  const modalState = useAppSelector((state)=>state.modal.display)

  console.log(modalState)
  useEffect(() => {
    const userDataStringified: string | null =
      localStorage.getItem("userToken");
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

  return (
    <BrowserRouter>
      <MemoizedNavbar />
      {modalState && <Modal/>}
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="Create" element={<Create  />} />
        <Route path="Login" element={<Login toastDetails={toastDetails} />} />
        <Route path="Profile" element={<Profile  />} />
        <Route path="SignUp" element={<SignUp toastDetails={toastDetails} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
