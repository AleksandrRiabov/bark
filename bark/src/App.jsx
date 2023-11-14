import './App.css'

import {
  Route,
  createHashRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./pages";

import Footer from "./components/Footer/";
import CssBaseline from "@mui/material/CssBaseline";
import SignIn from './pages/Authentication/SingIn';
import SignUp from './pages/Authentication/Signup';




const App = () => {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" index element={<Home />} />
        
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
 
        {/* <Route path="*" element={<Home />} /> */}
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

const Root = () => {
  return (
    <>
      <CssBaseline />
      <div>
        <Navbar />
      </div>
      <div className="page" >
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;
