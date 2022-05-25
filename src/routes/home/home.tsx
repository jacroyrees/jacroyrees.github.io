import "./home.css";
import { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Main from "../../Main";
import Header from "../../components/Header/header";
import Image from 'react-bootstrap/Image'
import profile from "../../assets/profile.jpeg";
import SideNav from "../../components/Options/sideNav";

export default function Home(): ReactElement {
return(
  
<>
   
<div className={"home"}>
  <div className={"left"}>
<img className={"profile"} src={profile}/>
</div>
<div className={"right"}>
 
  </div>
  

  
  </div>
  </>

);
}