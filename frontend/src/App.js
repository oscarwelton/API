import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Features from "./components/features";
import Demo from "./components/demo";
import Footer from "./components/footer";
import Form from "./components/form";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <div className="form-container">
        <h3 className="sign-up">
          Sign up to receive your <span>free</span> API key
        </h3>
        <Form />
      </div>
      <Features />
      <Demo />
      <Footer />
    </div>
  );
}

export default App;
