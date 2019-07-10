import React from 'react';

import '../../styles/content/section_name.css';

import PropTypes from 'prop-types';

const SectionName = ({name}) => {
    return (
        <>
            <p className={name === "Projects" ? "section_project" : "section_exp"}>{name}</p>
        </>
    );
}

SectionName.propTypes = {
    name: PropTypes.string,
}

export default SectionName;
