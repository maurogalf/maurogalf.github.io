import React from "react";
import { technologies } from "../../data/technologies";

const Technologies = () => {
    return (
        <div className="about tech">
            <h3>Some technologies I have worked with</h3>
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
