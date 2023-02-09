import AboutBlogrSection from "./components/AboutBlogrSection";
import DesignedForTheFutureSection from "./components/DesignedForTheFutureSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { StateOfTheArtSection } from "./components/StateOfTheArtSection";

export const App = () => {
  return (
    <>
      <Header />
      <Main />
      <DesignedForTheFutureSection />
      <StateOfTheArtSection />
      <AboutBlogrSection />
      <Footer />
    </>
  );
};
