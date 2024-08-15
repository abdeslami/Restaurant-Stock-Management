
import Dashboard from "./Dashboard/Dashboard";
import FoodStock from "./Dashboard/FoodStock";
import Utilisateur from "./Dashboard/Utilisateur";
import Login from "./login/Login";
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dasboard' element={<Dashboard />} />
      <Route path='/menu' element={<FoodStock />} />
      <Route path='/utilisateur' element={<Utilisateur />} />



    </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
