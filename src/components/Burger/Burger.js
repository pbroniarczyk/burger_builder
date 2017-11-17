import React from 'react';

// Components
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

// Assets
import classes from './Burger.css';

const Burger = ( props ) => {

    // Transform object into two arrays returning object's keys in amount of second object of object's values.
    let transformedIngredients = Object.keys(props.ingredients)
        .map(e => {
            return [...Array(props.ingredients[e])].map((_, i) => {
                return <BurgerIngredient key={e + i} type={e} />;
            });
        })
        // Fleten array of array to single array of ingredients.
        .reduce((arr, element) => {
            return arr.concat(element)
        }, []);

    // Check if there are some ingredients and show message.
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Let's add some ingredients!</p>
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger