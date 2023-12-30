import React from "react";

//headings (h1,h2, etc) would be an atomic component with props for styling and hierarchy to allow for most flexibility in styling while still being accessible hierarchically
function Card(props) {
    return (
       <div className="card">
        <article className={props.variant}>
          {props.tag && <div class="terms">{props.tag}</div> }
          {props.variant=="icon" && props.image && <div className="hexagon-container"><figure className="hexagon"><span className="hexagon-content"><img src={props.image} width="80px"/></span></figure></div> }
          <h2>{props.title}</h2>
          <p className="body-text">{props.bodyText}</p>  
          <a href={props.linkUrl}>{props.linkText}</a>
        </article>
       </div>
      
    );
  }
  
  export default Card;