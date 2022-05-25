import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./routes/home/home";
import { ReactElement } from "react";
import About from "./routes/About/about";
import Footer from "./components/Footer/footer";
import Resume from "./routes/Resume/resume";




export default function Main(): ReactElement {
  
  
  return (
    
    <Routes>
       <Route path= {process.env.PUBLIC_URL + ''} element={<Navigate to={process.env.PUBLIC_URL + "/about"} replace />}>
    </Route>
  
    <Route path={process.env.PUBLIC_URL + "/about"} element={<About />} />
    <Route path={process.env.PUBLIC_URL + "/resume"} element={<Resume />} />
    </Routes>
  );
}
