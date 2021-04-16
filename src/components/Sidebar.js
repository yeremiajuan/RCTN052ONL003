import React from "react";
import '../Sidebar.css';
import { Link, animateScroll as scroll } from "react-scroll";
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
                    <li>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="experience"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="education"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            Education
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="awards"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            Awards
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="interest"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Interest
                        </Link>
                    </li>
                </ul>

            </React.Fragment>
        );
    }
}