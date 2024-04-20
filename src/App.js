import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About"
import Footer from "./components/Footer";
import GetInvolved from "./components/GetInvolved";
import './styles/header.css';
import './styles/font.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/getinvolved" element={<GetInvolved />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
