import React from 'react'; 
import styles from './Hub.module.css';

import Device from '../Device/Device';
import Neu from '../Neumorph/Neomorph';

const hub = (props) => {
    const devices = props.hub.devices.map(device => <Device key={device.id} device={device} onControlChanged={(device, control) => props.onControlChanged(props.hub, device, control)} onControlLocalChange={(device, control) => props.onControlLocalChange(props.hub, device, control)} />)
    return (
        <div className={styles.Hub}>
            <Neu sink>
                <h2>{props.hub.name}</h2>
                <div className={styles.Devices}>
                    {devices}
                </div>
            </Neu>
        </div>
    );
}

export default hub;