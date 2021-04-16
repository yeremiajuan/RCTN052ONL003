import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default class About extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            judul: "Yeremia Juan",
            email: "yeremiajuant@gmail.com",
            nohp: "08128294xxxx",
            about: "I am Lorem Ipsum that is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        };
    }

    render() {
        return (
            <div className="columns Coba is-vcentered" id="about">
                <div className="column is-half is-offset-one-quarter ">
                    <h1 className="title is-1">{this.state.judul}</h1>
                    <p>{this.state.email} | {this.state.nohp}</p>
                    <div className="bio">
                        <p>{this.state.about}</p>

                    </div>
                    <div className="mt-3">
                        <FontAwesomeIcon icon={faGithubSquare} size="2x" />
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </div>
                </div>
            </div >
        );
    }
}