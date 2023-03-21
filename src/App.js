import Home from "./pages/Home"
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route, Routes, useNavigate } from "react-router-dom";
import './App.css';
import { PrivateRoute } from "./routes/PrivateRoute";
import { UnauthorizedRoute } from "./routes/UnauthorizedRoute";


function App() {

  const navigate = useNavigate();


  return (
    <div className='app'>
       <Routes>
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/login" element={<UnauthorizedRoute Component={Login} />} />
        <Route path="/register" element={<UnauthorizedRoute Component={Register} />} />
       </Routes>
    </div>
  );
}

export default App;
