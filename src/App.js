import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Crytocurrencies from "./page/Crytocurrencies";
import "./style/style.scss";

import { Navbar, Exchanges, News, CrytoDetails } from "./components";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cryto-currencies" element={<Crytocurrencies />}></Route>
        <Route path="/cryto-currencies/:id" element={<CrytoDetails />}></Route>
        <Route path="/exchanges" element={<Exchanges />}></Route>
        <Route path="/news" element={<News />}></Route>
      </Routes>
      {/* <div>footer</div> */}
    </Router>
  );
}

export default App;
