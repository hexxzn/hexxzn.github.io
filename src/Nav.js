import React from 'react';
import Skills from './Skills';

class Nav extends React.Component {
    render() {
        return (
            <nav className="portfolio-nav container-fluid">
                <div className="portfolio-nav-row row">
                    <div className="portfolio-nav-logo col-md">
                        <div>George Kilburg</div>
                        {/* <button>George Kilburg</button> */}
                    </div>
                    {<Skills />}
                </div>
            </nav>
        );
    }
}

export default Nav;