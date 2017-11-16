import React from 'react';

// Components
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

// Assets
import classes from './Burger.css';

const Burger = ( props ) => {
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger