import "./App.scss";
import Hero from "./components/Hero/Hero";
import { NavBar } from "./components/NavBar/NavBar";
import Parallax from "./components/Parallax/Parallax";
import { Services } from "./components/Services/Services";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <NavBar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Porfolio">
        <Parallax type="porfolio" />
      </section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
