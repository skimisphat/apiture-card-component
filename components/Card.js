import React from "react";
import './Card.css';
// I can also add this component into Knapsack on a branch for a full demo of the prototyping abilities and my Knapsack knowledge 
//headings (h1,h2, etc) would be an atomic component with props for styling and hierarchy to allow for most flexibility in styling while still being accessible hierarchically

// TODO: Some manner of event handling

function Card(props) {

  const buttonVariantClasses = props.variant=="icon" ? "linkButton linkButton--primary" : "linkButton linkButton--secondary";
    return (
       <div className="card">
        <article className={"card--" + props.variant}>
          {props.tag && <div className="terms">{props.tag}</div> }
          {props.variant=="icon" && props.image && <div className="hexagon-container">
            <figure className="hexagon">
              <span className="hexagon-content">
                <img src={props.image} width="80px"/>
              </span>
            </figure>
          </div> }
          <h2>{props.title}</h2>
          <p className="body-text">{props.bodyText}</p>
          <footer> 
            <a className={buttonVariantClasses} href={props.linkUrl}>{props.linkText}</a>
          </footer> 
        </article>
       </div>
      
    );
  }
  
  export default Card;