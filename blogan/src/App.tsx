import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import PostListComponent from "./pages/PostListComponent";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Login} />
      <Route path="/home" Component={PostListComponent} />
      <Route path="/register" Component={Register} />
    </Routes>
  );
}

export default App;
