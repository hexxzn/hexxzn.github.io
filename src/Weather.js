import React from "react";

class Weather extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="project row">
                    <div className="project-panel col-lg">
                        <div className="project-card">
                            <div className="project-card-title">Weather</div>
                            <div className="project-card-description">A simple JavaScript weather app.</div>
                            <div className="location">
                                <h1 className="location-timezone">Timezone</h1>
                                <p>Icon</p>
                            </div>
                            <div className="temperature">
                                <h2 className="unit">34</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Weather;