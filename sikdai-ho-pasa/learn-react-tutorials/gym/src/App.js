import "./App.css";
import Header from "./components/Header/Header";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Hero from "./components/UI/Hero";
import Exercises from "./components/UI/Exercises";
import Start from "./components/UI/Start";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Exercises />
      <Start />
    </>
  );
}

export default App;