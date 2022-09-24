import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import EditProfile from "./pages/EditProfile";
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
            <Route path="/volunteers" element={<Volunteers />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:id" element={<EditProfile />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
