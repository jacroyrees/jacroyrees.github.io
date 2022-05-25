
import React, { useEffect } from 'react';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import diamond from "../../assets/diamond.svg";
import filledDiamond from "../../assets/diamond_fill.svg";
import "./sideNav.css";
enum pages {
  about,
  resume,
  portfolio,
  contact
}
export default function SideNav(): ReactElement {
  const [page, setPage] = React.useState(pages.about);


  const whichDiamond = () => {
    return(
    <>
    <Link to={"/about"} onClick={() => setPage(pages.about)}><img src={page === pages.about ? filledDiamond : diamond} />
    </Link>
    <Link to={"/resume"}  onClick={() => setPage(pages.resume)}><img src={page === pages.resume ? filledDiamond : diamond} />
    </Link>
    <Link to={"/portfolio"} onClick={() => setPage(pages.portfolio)}><img src={page === pages.portfolio ? filledDiamond : diamond} />
    </Link>
    <Link to={"/contact"} onClick={() => setPage(pages.contact)}><img src={page === pages.contact ? filledDiamond : diamond} /></Link>
    
    
    
    </>)
    }
  
    useEffect(() => {
      whichDiamond();
    },[page]);



    return(
<div className={"sideNav"}>
    <div className={"icons"}>
      {whichDiamond() }
  
   
  </div>

  </div>

    )
}

