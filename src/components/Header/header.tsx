import { ReactElement } from "react";
import { Link } from "react-router-dom";
import Home from "../../routes/home/home";
import "./header.css"
import logo from "../../assets/logo.png";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import linkedIn from "../../assets//Icons/LinkedIn32.png";
import github from "../../assets/Icons/GitHub32px.png"
import SideNav from "../Options/sideNav";
export default function Header(): ReactElement {
return(

    <><div className="header">
        <img className={"logo"}src={logo}/>
        
        
        <div className="header-right">
            <Link to={"/about"}>About</Link>

            <Link to={"/resume"}>Resume</Link>
            <Link to={"/portfolio"}>Portfolio</Link>
            <Link to={"/contact"}>Contact</Link>

        
            
            <img className={"icon"}src={github}/>
            <img className={"icon"}src={linkedIn}/>
           
           
        </div>
    </div>
    <hr color={"#e8eaed"}/>
    
   
    
    </>
);
}