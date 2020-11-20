import React from 'react'; 
import styles from './Toggle.module.css';

const toggle = (props) => {
    return (
        <label className={styles.Switch}>
            <input type="checkbox" onChange={props.onToggled} checked={props.state}/>
            <span className={[styles.Slider, styles.Round].join(" ")}></span>
        </label>
    );
}

export default toggle;