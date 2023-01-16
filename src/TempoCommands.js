import React from "react";

class TempoCommands extends React.Component {
    commands = [
        {
            name: "help",
            description: (<span>Get a list of all available commands. Use <span className="green">!help &lt;command name&gt;</span> for information on individual commands.</span>),
            aliases: "h"
        },
        {
            name: "play <song title, artist>",
            description: "Play a song or, if a song is already playing, add to the queue.",
            aliases: "p"
        },
        {
            name: "search <song title, artist>",
            description: "Get a list of songs and choose which one to play.",
            aliases: "sr"
        },
        {
            name: "stop",
            description: "Stop audio playback, clear queue and disconnect.",
            aliases: "st"
        },
        {
            name: "pause",
            description: (<span>Pause audio playback. Use the <span className="green">!resume</span> command to continue playing.</span>),
            aliases: "ps"
        },
        {
            name: "resume",
            description: (<span>Resume playback after audio has been paused with the <span className="green">!pause</span> command.</span>),
            aliases: "rs"
        },
        {
            name: "skip",
            description: "Skip the current song.",
            aliases: "sk"
        },
        {
            name: "restart",
            description: "Return to the beginning of the current song.",
            aliases: "re"
        },
        {
            name: "seek <position in seconds>",
            description: "Seek to position in song.",
            aliases: "se"
        },
        {
            name: "volume",
            description: "Change audio playback volume by adjusting Tempo's input volume. This does not affect the \"User Volume\" slider set by individual server members.",
            aliases: "v"
        },
        {
            name: "song",
            description: "Get the title of the current song.",
            aliases: "sn"
        },
        {
            name: "queue",
            description: "Get a list of all songs currently in the queue.",
            aliases: "q"
        },
        {
            name: "repeat",
            description: "Turn repeat (current song) on or off.",
            aliases: "rp"
        },
        {
            name: "shuffle",
            description: "Turn shuffle on or off.",
            aliases: "sh"
        },
        {
            name: "remove <track number>",
            description: (<span>Remove a song from the queue. Use the <span className="green">!queue</span> command to see track numbers.</span>),
            aliases: "rm"
        },
        {
            name: "links",
            description: "Get a list of active links.",
            aliases: "li"
        },
        {
            name: "lyrics <song title, artist>",
            description: "Get the lyrics of any song.",
            aliases: "l"
        },
        {
            name: "equalizer",
            description: "Choose from a list of equalizer presets for a unique listening experience.",
            aliases: "eq"
        },
    ]

    listCommands = this.commands.map((command, index) =>
        <div key={index} className="tempo-card">
            <div className="tempo-command-name">!{command.name}</div>
            <div className="tempo-command-card">
                <div className="tempo-command-description">{command.description}</div>
                <div className="tempo-command-aliases">Alias: !{command.aliases}</div>
            </div>
        </div>
    );

    render() {
        return (
            <div className="col-lg-9 col-md-8">
                {this.listCommands}
            </div>
        );
    }
}

export default TempoCommands;