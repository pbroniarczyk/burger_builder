import React from 'react';

// Components
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

// Assets
import classes from './Burger.css';

const Burger = ( props ) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(e => {
            return [...Array(props.ingredients[e])].map((_, i) => {
                return <BurgerIngredient key={e + i} type={e} />;
            });
        });
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger