import React from "react";

export default class Experience extends React.Component {

    render() {
        return (
            <div className="columns Coba is-vcentered" id="experience">
                <div className="column is-two-thirds is-offset-one-quarter">
                    <h2 className="title is-2">Experience</h2>
                    <br />
                    <div className="columns">
                        <div className="column is-8">  <h4 className="title is-4">Github Campus Expert</h4> </div>
                        <div className="column"> <h5 >August 2018 - Present</h5></div>
                    </div>
                    <h5>GITHUB</h5>
                    <p>Responsible for building the on campus community with the support of GitHub</p>
                    <p></p>
                    <br />   <br />
                    <div className="columns ">
                        <div className="column is-8">  <h4 className="title is-4">Open Source Dev Intern</h4> </div>
                        <div className="column"> <h5 >June 2019 - Present</h5></div>
                    </div>
                    <h5>FOSSASIA</h5>
                    <p>Contributing to Fossasia's open event server and frontend as an internet, Resolved numerous bugs and added new features to the everyday platform</p>
                    <p></p>
                </div>

            </div>
        );
    }
}