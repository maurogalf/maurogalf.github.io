import React from "react";
import { technologies } from "../../data/technologies";
import { Link } from "react-router-dom"

const Technologies = () => {
    return (
        <div className="about tech">
            <Link to="/projects">Ver projectos</Link>
            <h2>Some technologies I have worked with</h2>
            {technologies.map((tech) => {
                return (
                    <div key={tech.name}>
                        <p>
                        <img className="logos" src={tech.logo} alt={tech.name} />
                        {tech.name}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default Technologies;
