import About from "./components/About";
import Choose from "./components/Choose";
import Gshock from "./components/Gshock";
import Hero from "./components/Hero";
import Join from "./components/Join";
import Tokenomics from "./components/Tokenomics";

function App() {
  return (
    <div className="flex flex-col jjustify-center iitems-center text-center overflow-clip">
      <Hero />
      <Choose />
      <About />
      <Gshock />
      <Tokenomics />
      <Join />
    </div>
  );
}

export default App;
