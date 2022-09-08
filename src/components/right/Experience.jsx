import React, { useState } from "react";
import { jobs } from "../../jobs";
import Job from "./Job";

export default function Experience() {
    const [show, setShow] = useState(2);
    const [indexShowed, setIndexShowed] = useState(99);

    let jobsShowed = jobs.slice(0, show);
    const handleMore = () => {
        const howMany = show + 2 > jobs.length ? jobs.length : show + 2;
        setShow(howMany);
    };

    const handleLess = () => {
        const howLess = show - 2 < 2 ? 2 : show - 2;
        setShow(howLess);
    };

    const showDetail = (index) => {
        console.log(index);
        setIndexShowed(indexShowed === index ? 99 : index);
    };

    return (
        <div className="about">
            <h2>Experience</h2>
            <ul>
                {jobsShowed.map((job, index) => {
                    console.log(index);
                    return (
                        <Job
                            showed={index === indexShowed}
                            index={index}
                            showDetail={showDetail}
                            job={job}
                            key={index}
                        />
                    );
                })}
            </ul>
                {jobsShowed.length !== 2 && (
                    <button className="btn-show btn-less" onClick={handleLess}>
                        ↑ Show less ↑
                    </button>
                )}
                {jobsShowed.length !== jobs.length && (
                    <button className="btn-show btn-more" onClick={handleMore}>
                        ↓ Show more ↓
                    </button>
                )}
        </div>
    );
}
