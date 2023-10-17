import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import { useRef } from "react";

function App() {
  const contact = useRef(null);
  const about = useRef(null);

  const scrollToAbout = () => {
    console.log("Scroll to About Us clicked");
    about.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    console.log("Scroll to Contact Us clicked");
    contact.current?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <>
      <Header scrollToAbout={scrollToAbout} scrollToContact={scrollToContact} />
      <Banner />
      <AboutUs ref={about} />
      <ContactUs ref={contact} />
      <Footer />
    </>
  );
}

export default App;
