import React from "react";
import '../Sidebar.css';
import { HashLink as Link } from "react-router-hash-link";
import { NavHashLink } from "react-router-hash-link";
import headshot from '../headshot.png';


export default class Sidebar extends React.Component {

    render() {
        return (
            <React.Fragment>

                <ul className="menu-list">


                    <div className="column mt-5 mb-5">
                        <figure className="image is-128x128">
                            <img className="is-rounded" src={headshot} alt="Logo" />
                        </figure>
                    </div>
                    <li >
                        <NavHashLink smooth to="#about" activeClassName="active">About</NavHashLink>
                    </li>

                    <li>
                        <NavHashLink smooth to="#awards" activeClassName="active">Awards</NavHashLink>
                    </li>
                    <li>
                        <NavHashLink smooth to="#experience" activeClassName="active">Experience</NavHashLink>
                    </li>
                    <li>
                        <NavHashLink smooth to="#interest" activeClassName="active">Interest</NavHashLink>
                    </li>
                    <li>
                        <NavHashLink smooth to="#skills" activeClassName="active">Skills</NavHashLink>
                    </li>
                </ul>

            </React.Fragment>
        );
    }
}