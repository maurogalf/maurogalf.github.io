import React from 'react'

export default function Job({job}) {
    const handleJobClick = (e) => {
        console.log(e.target)
    }
  return (
    <li className='job'>
        <button className='btn-job' onClick={handleJobClick}>
        <h5>{job.position}</h5>
        <span>{job.company}</span>
        <span>{job.starts} - {job.ends}</span>
        </button>
    </li>
  )
}
