import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal } from '@fortawesome/free-solid-svg-icons'

export default class Awards extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            judul: "Awards & Certifications",
            awards: ["Menang lomba mewarnai", "Mentor OpenCode '19", "Started Indonesia First Student Design Blablabla"],
        };
    }

    render() {
        return (
            <div className="columns Coba is-vcentered" id="awards">
                <div className="column is-half is-offset-one-quarter">
                    <h2 className="title is-2">{this.state.judul}</h2>
                    {this.state.awards.map((value, index) => {
                        return (<p> <FontAwesomeIcon icon={faMedal} color="yellow" /> {value}</p>);
                    })}
                </div>
            </div>
        );
    }
}