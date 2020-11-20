import React from 'react'; 
import styles from './Hubs.module.css';

import Hub from '../Hub/Hub';
import axios from 'axios';

class Hubs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hubs: []
        }
    }

    componentDidMount() {
        axios.get("https://secure.nilsson.tech/server-0.0.1/api/hubs", {
            auth: {
                username: "admin",
                password: "pa$$w0rd"
            }
        })
        .then(response => {
            this.setState({hubs: response.data});
        });
    }

    updateControl = (hub, device, control) => {
        axios.put(`https://secure.nilsson.tech/server-0.0.1/api/hubs/${hub.id}/devices/${device.id}/controls`, control, {
            auth: {
                username: "admin",
                password: "pa$$w0rd"
            }
        })
        .then(() => {
            console.log("[hubs]", control);
            const hubs = [...this.state.hubs];
            const hubIndex = hubs.findIndex(h => h.id === hub.id);
            const deviceIndex = hubs[hubIndex].devices.findIndex(d => d.id === device.id);
            const controlIndex = hubs[hubIndex].devices[deviceIndex].controls.findIndex(c => c.id === control.id);
            hubs[hubIndex].devices[deviceIndex].controls.splice(controlIndex, 1, control);
            this.setState({hubs: hubs});
            console.log("[hubs]: Updated!");
        });
    }

    updateControlLocally = (hub, device, control) => {
        const hubs = [...this.state.hubs];
        const hubIndex = hubs.findIndex(h => h.id === hub.id);
        const deviceIndex = hubs[hubIndex].devices.findIndex(d => d.id === device.id);
        const controlIndex = hubs[hubIndex].devices[deviceIndex].controls.findIndex(c => c.id === control.id);
        hubs[hubIndex].devices[deviceIndex].controls.splice(controlIndex, 1, control);
        this.setState({hubs: hubs});
    }

    render() {
        const hubs = this.state.hubs.map(hub => <Hub key={hub.id} hub={hub} onControlChanged={this.updateControl} onControlLocalChange={this.updateControlLocally} />);
        return (
            <div className={styles.Hubs}>
                {hubs}
            </div>  
        );
    }
}

export default Hubs;