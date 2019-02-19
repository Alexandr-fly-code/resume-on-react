import React from 'react';
import '../../styles/fullName.css';

import avatar from '../../img/avatar.png';
const FullName = () => {
    return (
        <div className="FullName">
            <img className="Logo" />
                <ul className="wrap_full_name">
                    <li className="up_size"><p className="name">alexandr <span className="surname">stupak</span></p></li>        
                    <li className="up_size"><p className="position">Front End developer(React.js)</p></li>
                    <li><span className="up_size position">github</span><a className="position git_link" href="https://github.com/Alexandr-fly-code" target="_blank"> : https://github.com/Alexandr-fly-code</a></li>

                </ul>
        </div>
    );
};

export default FullName;