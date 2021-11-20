import React, { Fragment} from 'react';


const Aux = (props: any) => {
    return (
        <Fragment>
            <div className={props.className}>{props.children}</div>
        </Fragment>
        
    );
};

export default Aux;