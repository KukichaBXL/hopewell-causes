import Navbar from "./components/Navbar";
import Features from "./components/Features";
import CauseCard from "./components/CauseCard";
import { causes } from "./data/causes";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Features />
        <CauseCard cause={causes[0]} />
      </main>
    </>
  );
}

export default App;
