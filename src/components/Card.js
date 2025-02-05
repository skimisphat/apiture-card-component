//Card component JSX 
// with two variations: Icon and Text, but could be easily extended to include more variations
// Ideally this would contain atomic components for headings (with props for styling and hierarchy to allow for most flexibility in styling while still being accessible) and links

import React from "react";
import './Card.css';

function Card(props) {

  const buttonVariantClasses = props.variant==="icon" ? "linkButton linkButton--primary" : "linkButton linkButton--secondary";
    return (
       <div className="card">
        <article className={"card--" + props.variant}>
          {props.tag && <div className="terms">{props.tag}</div> }
          {props.variant==="icon" && props.image && <div className="hexagon-container">
            <figure className="hexagon">
              <span className="hexagon-content">
                <img src={props.image} width="80px" alt=""/>
              </span>
            </figure>
          </div> }
          <h2>{props.title}</h2>
          <p className="body-text">{props.bodyText}</p>
          <footer className="card__footer"> 
            <a className={buttonVariantClasses} href={props.linkUrl}>{props.linkText}</a>
          </footer> 
        </article>
       </div>
    );
  }
  
  export default Card;