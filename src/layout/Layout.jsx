// import { Link } from "react-router-dom";
// import Footer from "../components/SharedComponent/Footer/Footer";

import Footer from "../components/SharedComponent/Footer/Footer";
import NavBar from "../components/SharedComponent/Navbar/NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
       <NavBar/>
        {/* <Link to="/">Home</Link>
        <br />
        <Link to="/platelet">Platelet</Link>
        <br />
        <Link to="/thalassemia">Thalassemia</Link>
        <br />
        <Link to="/volunteers">Volunteers</Link>
        <br />
        <Link to="/login">Login</Link>
        <br />
        <Link to="/signin">Signin</Link>
        <br />
        <Link to="/profile">Profile</Link> */}
      </nav>
      <main>{children}</main>
      <footer>
        
        <Footer/>
      </footer>
    </div>
  );
};

export default Layout;
