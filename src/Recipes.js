import React from "react";
import { Fragment } from "react/cjs/react.production.min";

const Recipes = (props) => 
    {
        return(
            <Fragment>
                <div key={props.Key}>
                    <h1>{props.Title}</h1>
                    <ul>
                     {props.Ingredients.map(i => (<li>{i.text}</li>) )}
                       
                    </ul>
                    <p><i>Calories</i>: {props.Calories}</p>
                    <img src={props.img}alt="" />  
                </div>
            </Fragment>

        )

        
    }

export default Recipes;