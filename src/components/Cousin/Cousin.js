import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Cousin = ({house}) => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h3>Cousin</h3>
            <p>House : {house}</p>
            <p><small>{ring}</small></p>
        </div>
    );
};

export default Cousin;