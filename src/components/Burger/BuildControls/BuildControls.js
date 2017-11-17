import React from 'react';

// components
import BuildControl from './BuildControl/BuildControl';

// assets
import classes from './BuildControls.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Chesee', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(e => 
            <BuildControl
                key={e.label} 
                label={e.label} 
                added={() => props.ingredientAdded(e.type)}
                removed={() => props.ingredientRemoved(e.type)}
                disabled={props.disabled[e.type]}
            /> )}
    </div>
);

export default BuildControls