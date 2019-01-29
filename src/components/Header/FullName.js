import React from 'react';
import '../../styles/fullName.css';

const FullName = () => {
    return (
        <div className="FullName">
            <img className="Logo"/>
                <ul className="wrap_full_name">
                    <li className="up_size"><p className="name">alexandr <span className="surname">stupak</span></p></li>        
                    <li className="up_size"><p className="position">Front End developer(React.js)</p></li>
                </ul>
        </div>
    );
};

export default FullName;