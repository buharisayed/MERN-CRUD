import "./App.css";
import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import MernCrud from "./components/MernCrud";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditUser from "./components/EditUser";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MernCrud />} />
          <Route path="/all" element={<AllUsers />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
