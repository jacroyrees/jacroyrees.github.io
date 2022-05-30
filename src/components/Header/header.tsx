import { ReactElement } from "react";
import { Link } from "react-router-dom";
import Home from "../../routes/home/home";
import "./header.css"
import logo from "../../assets/logo.png";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import linkedIn from "../../assets//Icons/LinkedIn32.png";
import github from "../../assets/Icons/GitHub32px.png"
import SideNav from "../Options/sideNav";
import { IconButton } from "@mui/material";
import { HiOutlineMenu} from "react-icons/hi";

export default function Header(): ReactElement {
return(

    <>
    <div className="header">
       <img className={"logo"}src={logo}/>
        
        
        <div className="header-right-large">
            <Link className={"link"}to={"/about"}>About</Link>

            <Link className={"link"} to={"/resume"}>Resume</Link>
            <Link className={"link"} to={"/portfolio"}>Portfolio</Link>
            <Link className={"link"} to={"/contact"}>Contact</Link>

        
            
            <a className={"icon"}href={"https://www.github.com/jacroyrees"}><img className={"icon"}src={github}/></a>
            <a className={"icon"}href={"https://www.linkedin.com/in/jacroyrees/"}><img className={"icon"}src={linkedIn}/></a>
           
        </div>
        <div className="header-right-small">
           
        <HiOutlineMenu size={32} className="menu-icon" color="white"/>
            </div>
    </div>
    <hr color={"#e8eaed"}/>
    
   
    
    </>
);
}