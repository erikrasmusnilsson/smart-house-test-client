import React from 'react';
import styles from './Slider.module.css';

const slider = (props) => {
    return (
        <div className={styles.SliderContainer}>
            <input onMouseUp={(event) => { props.onChange(parseInt(event.target.value))}} onChange={(event) => props.onLocalChange(parseInt(event.target.value))} type="range" min={props.fromRange} max={props.toRange} value={props.state} className={styles.Slider} />
        </div>
    )
}

export default slider; 