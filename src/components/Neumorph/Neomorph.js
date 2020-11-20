import React from 'react';
import styles from './Neumorph.module.css';

const neumorph = (props) => {
    return (
        <div className={[styles.Neumorph, props.vertical ? styles.Vertical : null, props.sink ? styles.Sink : null].join(" ")}>
            {props.children}
        </div>
    );
}

export default neumorph;