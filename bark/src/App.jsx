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
import { useAuth } from "./context/AuthContext";

const App = () => {
  const { user } = useAuth();
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" index element={<Home />} />

        {/* Service Seller */}
        {user && user.sellerStatus ? (
          <>
            <Route path="/sellers/home" index element={<SellerProfilePage />} />
            <Route path="/sellers/leads" index element={<LeadsPage />} />
            <Route
              path="/sellers/my-responses"
              index
              element={<MyResponsesPage />}
            />
            <Route
              path="/sellers/settings"
              index
              element={<SellerSettings />}
            />
          </>
        ) : user ? (
          // Buyer Routes
          <>
            <Route
              path="/sellers/settings"
              index
              element={<SellerSettings />}
            />
          </>
        ) : (
          <>
            {/* Authentication Routes */}
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </>
        )}
        <Route path="*" element={<Home />} />
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
