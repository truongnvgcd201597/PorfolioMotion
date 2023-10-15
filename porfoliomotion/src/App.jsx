import "./App.scss";
import Contact from "./components/Contact/Contact";
import Curor from "./components/Cursor/Curor";
import Hero from "./components/Hero/Hero";
import { NavBar } from "./components/NavBar/NavBar";
import Parallax from "./components/Parallax/Parallax";
import { Porfolio } from "./components/Porfolio/Porfolio";
import { Services } from "./components/Services/Services";

const App = () => {
  return (
    <div>
      <Curor />
      <section id="Homepage">
        <NavBar />
        {/* <Hero /> */}
      </section>
      {/* <section id="Services">
        <Parallax type="services" />
      </section> */}
      {/* <section>
        <Services />
      </section> */}
      {/* <section id="Porfolio">
        <Parallax type="porfolio" />
      </section> */}
      {/* <Porfolio />
      <section id="Contact">
        <Contact />
      </section> */}
    </div>
  );
};

export default App;
