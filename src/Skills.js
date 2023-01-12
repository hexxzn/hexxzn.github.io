import React from 'react';
import ReactDOM from 'react-dom';

class Skills extends React.Component {
    skills = [
        "Java",
        "C#",
        "Python",
        "JavaScript",
        "React",
        "HTML/CSS",
        "SQL"
    ]

    listSkills = this.skills.map((skill) =>
            <button>{skill}</button>
    );
    
    render() {
        return (
            <div className="skills">
                {this.listSkills}
            </div>
        );
    }
}

ReactDOM.render(<Skills />, document.getElementById('root'));
export default Skills;