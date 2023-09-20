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
        <Form />
        <p className="sign-up">
          Sign up with a valid email address to receive your <span>free </span>
          API key
        </p>
        <Features />
        <Demo />
      <Footer />
    </div>
  );
}

export default App;
