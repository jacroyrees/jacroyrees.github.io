import "./home.css";
import { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Main from "../../Main";
import Header from "../../components/Header/header";
import Image from 'react-bootstrap/Image'
import profile from "../../../public/assets/profile.jpeg";
import SideNav from "../../components/Options/sideNav";

export default function Portfolio(): ReactElement {
return(
  
<>
<script src="https://cdn.jsdelivr.net/npm/tsparticles@1.9.2/dist/tsparticles.min.js" integrity="sha256-5kED68Spy7K2CEbfu4CjV92DmZR5ZQFUoIR5qmPzZWg=" crossOrigin="anonymous"></script>
   
<div className={"home"}>
  <div className={"left"}>
<h1 id="h1">ABOUT</h1>
</div>

<div className={"right"}>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  </div>
  
  </div>
  </>

);
}