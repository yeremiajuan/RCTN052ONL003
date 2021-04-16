import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default class Experience extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            judul: "Experience",
            email: "yeremiajuant@gmail.com",
            nohp: "08128294xxxx",
            about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        };
    }

    render() {
        return (
            <div className="columns Coba is-vcentered" id="experience">
                <div className="column is-half is-offset-one-quarter">
                    <h2 className="title is-2">{this.state.judul}</h2>
                    <p>{this.state.email}, {this.state.nohp}</p>
                    <p>{this.state.about}</p>
                    <FontAwesomeIcon icon={faCoffee} />
                </div>
            </div>
        );
    }
}