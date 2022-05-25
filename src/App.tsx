
import "./App.css";
import Header from "./components/Header/header";
import Main from "./Main";
import "@fontsource/fira-code";

import ParticlesComponent from "./components/Particles/particlesComponent";
import SideNav from "./components/Options/sideNav";
import Footer from "./components/Footer/footer";





const App = () => {
    return(
    <>
     <Header/>
    <SideNav/>
   
    <ParticlesComponent/>
      <Main/>
     <Footer/>
     
      </> 
  );
}
export default App;