import React from 'react';
import styles from './Device.module.css';

import Control from '../Control/Control';
import Sensor from '../Sensor/Sensor';
import Neu from '../Neumorph/Neomorph';

const device = (props) => {
    const controls = props.device.controls.map(control => (control.readonly) ? null : <Control key={control.id} control={control} onControlChanged={(newControl) => props.onControlChanged(props.device, newControl)} onControlLocalChange={(newControl) => props.onControlLocalChange(props.device, newControl)} />);
    const sensors = props.device.controls.map(sensor => (sensor.readonly) ? <Sensor key={sensor.id} sensor={sensor} /> : null);
    return (
        <div className={styles.Device}>
            <Neu vertical>
                {props.device.type === "Lamp" ? <i className={["far fa-lightbulb", styles.Icon].join(" ")}></i> : null}
                {props.device.type === "Buzzer" ? <i className={["far fa-bell", styles.Icon].join(" ")}></i> : null}
                {props.device.type === "Fan" ? <i className={["fas fa-fan", styles.Icon, styles.FanIcon].join(" ")}></i> : null}
                {props.device.type === "Temp Sensor" ? <i className={["fas fa-thermometer-half", styles.Icon].join(" ")}></i> : null}
                <h3 className={styles.DeviceTitle}>{props.device.name}</h3>
                <div className={styles.Controls}>
                    {controls}
                </div>
                <div className={styles.Sensor}>
                    {sensors}
                </div>
            </Neu>
        </div>
    )
}

export default device; 