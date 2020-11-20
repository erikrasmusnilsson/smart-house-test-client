import React from 'react'; 
import styles from './Sensor.module.css';

import Neu from '../Neumorph/Neomorph';

const sensor = (props) => {
    return (
        <Neu sink>
            <p>{props.sensor.name}: {props.sensor.state}</p>
        </Neu>
    );
}

export default sensor; 