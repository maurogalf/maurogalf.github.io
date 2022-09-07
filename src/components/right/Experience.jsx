import React from "react";
import { jobs } from "../../jobs";
import Job from "./Job";

export default function Experience() {
    return (
        <div className="about">
            <h2>Experience</h2>
            <ul>
                {jobs.map((job) => {
                    return <Job job={job} />;
                })}
            </ul>
        </div>
    );
}
