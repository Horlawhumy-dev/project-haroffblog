import React, { Fragment} from 'react';


const Aux = (props: any) => {
    return (
        <>
            <div className={props.className}>{props.children}</div>
        </>
        
    );
};

export default Aux;