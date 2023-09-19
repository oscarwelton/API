import Navbar from "./components/navbar";
import Banner from "./components/banner";
import Features from "./components/features";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Banner />
        <div className="form">
          <form action="">
            <input type="email" placeholder="Email"></input>
            <button type="submit">Submit</button>
          </form>
        </div>
        <p>
          *Sign up with a valid email address to receive your <span>free</span>
          API key
        </p>
        <Features />
      </main>
    </div>
  );
}

export default App;
