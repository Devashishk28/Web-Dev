import "./App.css";
import HeroSection from "./components/Hero";
import Navigation from "./components/Navigation";
import Menu from "./components/Menu/Menu"; 
import FreshDrops from "./components/freshdrops";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import { useState } from "react";



function App(){
  const[showLogin, setShowLogin]=useState(false);

  return (
  <>
    <Navigation onLoginClick={() => setShowLogin(true)} />

      <HeroSection />
      <Menu />
      <FreshDrops />
      <Footer />

      <LoginModal 
          isOpen={showLogin}
          onClose={() => setShowLogin(false)} />
  </>
  );
}
export default App;