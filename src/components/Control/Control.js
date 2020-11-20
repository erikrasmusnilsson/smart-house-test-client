import React from 'react'; 
import styles from './Control.module.css';

import Toggle from '../Toggle/Toggle';
import Slider from '../Slider/Slider';

const control = (props) => {
    return (
        <div className={styles.Control}>
            <p>{props.control.name}{props.control.readonly ? ": " + props.control.state : null}</p>
            {props.control.dataType === "BOOLEAN" && !props.control.readonly ? (
            <Toggle state={props.control.state} onToggled={() => {
                props.control.state = !props.control.state;
                props.onControlChanged(props.control);
            }} />) : null}
            {props.control.dataType == "INTEGER" && !props.control.readonly && props.control.fromRange != null && props.control.toRange != null ? (
                <Slider fromRange={props.control.fromRange} toRange={props.control.toRange} state={props.control.state} 
                    onChange={(state) => {
                        props.control.state = state;
                        props.onControlChanged(props.control);
                    }}
                    onLocalChange={(state) => {
                        props.control.state = state;
                        props.onControlLocalChange(props.control);
                    }}/>
            ) : null}
        </div>
    );
}

export default control;