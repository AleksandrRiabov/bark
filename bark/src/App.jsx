import "./App.css";

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
import SignIn from "./pages/Authentication/SingIn";
import SignUp from "./pages/Authentication/Signup";
import SellerProfilePage from "./pages/Users/Sellers/SellerProfilePage";
import LeadsPage from "./pages/Users/Sellers/Leads";
import MyResponsesPage from "./pages/Users/Sellers/MyResponses";
import SellerSettings from "./pages/Users/Sellers/SellerSettings";

const App = () => {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" index element={<Home />} />

        {/* Service Seller */}
        <Route path="/sellers/home" index element={<SellerProfilePage />} />
        <Route path="/sellers/leads" index element={<LeadsPage />} />
        <Route
          path="/sellers/my-responses"
          index
          element={<MyResponsesPage />}
        />
        <Route path="/sellers/settings" index element={<SellerSettings />} />

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
      <div className="page">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;
