import React from 'react';
import TempoCommands from './TempoCommands';

class Tempo extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="tempo row">
                    <div className="col-lg-3 col-md-4">
                        <div className="tempo-tabs-card">
                            <div className="tempo-nav">
                                <div className="tempo-tabs">
                                    <div className="tempo-tab">Tempo</div>
                                    <div className="tempo-tab-green">Commands</div>
                                    <div className="tempo-tab">Links</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <TempoCommands />
                </div>
            </div>
        );
    }
}

export default Tempo;