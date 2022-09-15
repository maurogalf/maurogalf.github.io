import React from 'react';
import Left from './Left';
import Right from './Right';

const Resume = ({setPage}) => {
    setPage(1);
    return (
        <>
            <Left/>
            <Right/>
        </>
    );
}

export default Resume;
