import React from "react";

export default class Education extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            judul: "Education",
            school: "Akademi Ninja Konoha",
            gelar: "Hokage",
            time: "August 2016 - Present",
        };
    }

    render() {
        return (
            <div className="columns Coba is-vcentered" id="education">
                <div className="column is-two-thirds is-offset-one-quarter">
                    <h2 className="title is-2">{this.state.judul}</h2>
                    <br />
                    <div className="columns">
                        <div className="column is-8"><h4 className="title is-4">{this.state.school}</h4></div>
                        <div className="column"> <h5 >{this.state.time}</h5></div>
                    </div>
                    <h5>{this.state.gelar}</h5>
                </div>
            </div>
        );
    }
}