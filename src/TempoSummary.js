import React from "react";

class TempoSummary extends React.Component {
    render() {
        return (
            <div className="col-lg-9 col-md-8">
                    {/* <div className="tempo-card">
                        <div className="tempo-command-name">Tempo</div>
                        <div className="tempo-command-card">
                            <div className="tempo-command-description">
                                <p>A Discord bot, written in Python, that makes it easy to stream music directly to your Discord server.</p>
                                <p>Simply connect to a voice channel and type a command in any text channel visible to Tempo.</p>
                            </div>
                        </div>
                    </div>
                    <div className="tempo-card">
                        <div className="tempo-command-name">Commands</div>
                        <div className="tempo-command-card">
                            <div className="tempo-command-description">
                                <p>Type <span className="green">!help</span> in chat to get a list of available commands.</p>
                                <p>Type <span className="green">!help</span> followed by a command name for information on what the command does and how to use it.</p>
                            </div>
                        </div>
                    </div> */}
                    <div className="tempo-card tempo-summary">
                        <div className="tempo-summary-1">
                            {/* <img className="tempo-summary-left" src="/tempoSummary.png" alt="Tempo Commands" /> */}
                            <div className="tempo-summary-text">
                                <div className="tempo-summary-title">Tempo</div>
                                <p>Tempo is a Discord bot that makes it easy to stream music directly to your Discord server.</p>
                                <p>Simply connect to a voice channel and type a command in any text channel visible to Tempo.</p>
                            </div>
                        </div>
                        <div className="tempo-summary-2">
                            {/* <img src="/tempoCommands.png" alt="Tempo Commands" /> */}
                            <div className="tempo-summary-text">
                                <div className="tempo-summary-title">Commands</div>
                                <p>For a full list of commands along with command details, visit the commands page. You can also enter <span className="green">!help</span> in any Discord text channel visible to Tempo.</p>
                                <p>Enter <span className="green">!help</span> followed by a command for information on what the command does and how to use it. For example, enter <span className="green">!help play</span> for information on the <span className="green">!play</span> command.</p>
                                <p>Command aliases function as shorthand for issuing commands. For example, enter either <span className="green">!queue</span> or <span className="green">!q</span> to see a list of queued songs.</p>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default TempoSummary;