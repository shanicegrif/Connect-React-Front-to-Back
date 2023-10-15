import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import "./App.css"
import Home from "../Components/Home";
import NavBar from "../Components/NavBar";
import Logs from "../Components/Logs";
import NewLog from "../Components/NewLog";
import ShowLog from "../Components/ShowLog";
import UpdateLog from "../Components/UpdateLog";
import ErrorMessage from "../Components/ErrorMessage";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logs" element={<Logs />} />
            <Route path="/logs/new" element={<NewLog />} />
            <Route path="/logs/:index" element={<ShowLog />} />
            <Route path="/logs/:index/edit" element={<UpdateLog />} />
            <Route path="*" element={<ErrorMessage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
