import React from "react";

export default function Job({ job, showDetail, showed, index }) {
    return (
        <li className="job">
            <button className="btn-job" onClick={() => showDetail(index)}>
                <h5>{job.position}</h5>
                <span>{job.company}</span>
                <span>
                    {job.starts} - {job.ends}
                </span>
                {showed && <p>{job.description}</p>}
            </button>
        </li>
    );
}
