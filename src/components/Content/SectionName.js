import React from 'react';

import '../../styles/content/section_name.css';

const SectionName = ({name}) => {
    return (
        <>
            <p className={name === "Projects" ? "section_project" : "section_exp"}>{name}</p>
        </>
    );
}

export default SectionName;
