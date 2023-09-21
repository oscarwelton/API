import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Documentation from "./pages/documentation";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Features from "./components/features";
import Demo from "./components/demo";
import Footer from "./components/footer";
import Form from "./components/form";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<>
          <Banner />
          <div className="form-container">
            <Form />
          </div>
          <Features />
          <Demo />
        </>} />
        <Route path="/documentation" element={<Documentation />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
