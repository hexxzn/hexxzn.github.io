import React from 'react';
// import TempoCommands from './TempoCommands';
import TempoSummary from './TempoSummary';

class Tempo extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="tempo row">
                    <div className="col-lg-3 col-md-4">
                        {/* <div className="tempo-tabs-card tempo-home">
                            <div className="tempo-nav">
                                <div className="tempo-tabs">
                                    <a className="tempo-tab">&larr; Home</a>
                                </div>
                            </div>
                        </div> */}
                        <div className='tempo-tabs-card'>
                            <div className="tempo-nav-title">Tempo</div>
                        </div>
                        <div className="tempo-tabs-card">
                            <div className="tempo-nav">
                                <div className="tempo-tabs">
                                    <a className="tempo-tab tempo-tab-green">Summary</a>
                                    <a className="tempo-tab">Commands</a>
                                    <a className="tempo-tab">Links</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <TempoSummary />
                    {/* <TempoCommands /> */}
                </div>
            </div>
        );
    }
}

export default Tempo;