import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Register from "./pages/Register";
import { Provider } from "react-redux";
import { store } from "./redux";
import PrivateRouter from "./router/PrivateRouter";
import MovieDetail from "./pages/MovieDetail";
import { ToastContainer } from "react-toastify"

function App() {

  

  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/details" element={<PrivateRouter />}>
            <Route path="" element={<MovieDetail />}/>
          </Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
