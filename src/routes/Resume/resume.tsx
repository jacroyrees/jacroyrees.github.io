import "./resume.css";
import { ReactElement } from "react";

import Timeline from "../../components/timeline/timeline";

export default function Resume(): ReactElement {
return(
<>   
<div className={"resume"}>
<h1 className={"h1"}>Resume</h1>
  <Timeline />
  </div>
  </>

);
}