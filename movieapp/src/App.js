import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Register from "./pages/Register";
import { Provider } from "react-redux";
import { store } from "./redux";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
