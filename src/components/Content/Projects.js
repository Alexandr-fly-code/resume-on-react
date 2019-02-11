import React from 'react';
import Education from './Education';

const Projects = () => {

    const stack = {
        serpstat: "react, redux, redux-saga",
    }

    const { serpstat } = stack;
    return (
        <div className="Projects">
            <Education 
                // background="Projects"
                positionOrNameProject="Front End developer" 
                startOrBeginProject="2015" 
                sectionName="Projects"
                stackTechnology={serpstat} 
                stack="Stack Technology"
                nameCompanyOrProject="Projects"
                description="description"
            />
        </div>
    );
}

export default Projects;
