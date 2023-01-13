import React from 'react';

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
            <div key={skill} className="skill">{skill}</div>
    );
    
    render() {
        return (
            <div className="skills col-md">
                {this.listSkills}
            </div>
        );
    }
}

export default Skills;