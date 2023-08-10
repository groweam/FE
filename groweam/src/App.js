import { Route, Routes } from "react-router-dom";
import Landing from './pages/Landing';
import Home from './pages/Home';
import Login from './pages/Login';
import Todo from './pages/Todo';
import Meeting from './pages/Meeting';
import TeamManage from './pages/TeamManage';

const App = () => {
  return (
    <Routes>    
      <Route path="/home" element={<Home />} />
      <Route path="/Landing" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/meeting" element={<Meeting />} />
      <Route path="/teamManage" element={<TeamManage />} />
    </Routes>
  );
};

export default App;
