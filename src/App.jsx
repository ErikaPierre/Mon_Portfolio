import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Profil from "./components/Profil";
import Skills from "./components/Skills";
import Parcours from "./components/Parcours";
import Projets from "./components/Projets";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Profil />
      <Skills />
      <Parcours />
      <Projets />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
