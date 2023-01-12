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
            <div className="skill">{skill}</div>
    );
    
    render() {
        return (
            <div className="skills col-md">
                {this.listSkills}
            </div>
        );
    }
}

ReactDOM.render(<Skills />, document.getElementById('root'));
export default Skills;