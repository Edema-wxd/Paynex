import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Signin from "./pages/signin/Signin";
import Homenav from "./components/Homenav";
//import Dashnav from "./components/Dashnav";
import Dashboard from "./pages/dashboard/Dashboard";
import { GProvider } from "./context/Gcontext";

function App() {
  return (
    <>
      <GProvider>
        <Homenav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/signin" element={<Signin />}></Route>

          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="deposit" element={<h1>Deposit</h1>}></Route>
            <Route path="transfer" element={<h1>Transfer</h1>}></Route>
            <Route path="signout" element={<h1>Signout</h1>}></Route>
            <Route path="home" element={<h1>Home</h1>}></Route>
            <Route path="activity" element={<h1>Activity</h1>}></Route>
            <Route path="cards" element={<h1>Cards</h1>}></Route>
            <Route path="profile" element={<h1>Profile</h1>}></Route>
            <Route path="help" element={<h1>notifications</h1>}></Route>
          </Route>
          <Route path="*" element={<h1>no page</h1>}></Route>
        </Routes>
      </GProvider>
    </>
  );
}

export default App;
