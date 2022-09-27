import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThalasemiaDetails from "./components/Thalassemia/ThalasemiaDetails";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Platelet from "./pages/Platelet";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Signin from "./pages/Signin";
import Thalassemia from "./pages/Thalassemia";
import Volunteers from "./pages/Volunteers";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platelet" element={<Platelet />} />
            <Route path="/thalassemia" element={<Thalassemia />} />
            <Route path="/thalasemiadetails" element={<ThalasemiaDetails></ThalasemiaDetails>}></Route>
            <Route path="/volunteers" element={<Volunteers />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
