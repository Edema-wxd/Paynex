import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Signin from "./pages/signin/Signin";
import Homenav from "./components/Homenav";
//import Dashnav from "./components/Dashnav";
import Dashboard from "./pages/dashboard/Dashboard";
import { GProvider } from "./context/Gcontext";
import Profile from "./components/profile/Profile";
import Usercard from "./components/usercard/Usercard";
import Deposit from "./components/deposit/Deposit";
import Help from "./components/help/Help";
import Activities from "./components/activities/Activities";
import Nopage from "./components/nopage/Nopage";

function App() {
  return (
    <>
      <GProvider>
        <Homenav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="services" element={<Services />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="signin" element={<Signin />}></Route>

          <Route path="dashboard" element={<Dashboard />}>
            <Route path="deposit" element={<Deposit />}></Route>
            <Route path="transfer" element={<h1>Transfer</h1>}></Route>
            <Route path="activity" element={<Activities />}></Route>
            <Route path="cards" element={<Usercard />}></Route>
            <Route path="profile" element={<Profile />}></Route>
            <Route path="help" element={<Help />}></Route>
          </Route>
          <Route path="*" element={<Nopage />}></Route>
        </Routes>
      </GProvider>
    </>
  );
}

export default App;
