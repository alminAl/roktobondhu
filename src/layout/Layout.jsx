// import { Link } from "react-router-dom";
import Footer from "../components/SharedComponent/Footer/Footer";
import Navbar from "../components/SharedComponent/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        {/* <h1>navber</h1> */}
        <Navbar/>
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
        {/* <h1>footer</h1> */}
        <Footer/>
      </footer>
    </div>
  );
};

export default Layout;
