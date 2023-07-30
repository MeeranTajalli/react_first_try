//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.


import React from "react"
import ReactDOM from "react-dom"

ReactDOM.render(
<div>
<h1> My Favorite Video Games </h1>
<ul>
<li> Last Of Us </li>
<li> Battlefield 1 </li>
<li> Red Dead Redemption </li>
   </ul>
</div>,
document.getElementById("root")
)
