import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export default class Skills extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            judul: "Skills",
            skills: ["Mewarnai", "Bunshin", "Makan", "Tidur", "React"],

        };
    }

    render() {
        return (
            <div className="columns Coba is-vcentered" id="skills">
                <div className="column is-half is-offset-one-quarter">
                    <h2 className="title is-2">{this.state.judul}</h2>
                    {this.state.skills.map((value, index) => {
                        return (<p> <FontAwesomeIcon icon={faCheckCircle} color="green" /> {value}</p>);
                    })}

                </div>
            </div>
        );
    }
}