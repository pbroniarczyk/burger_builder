import React from 'react';

// Components
import Aux from '../../hoc/Auxiliary';

// Assets
import classes from './layout.css';

console.log(classes);
const Layout = ( props ) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default Layout