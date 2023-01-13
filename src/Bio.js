import React from 'react'

class Bio extends React.Component {
    bio = {
        head: "Introduction",
        title: "Hello, I'm George Kilburg.",
        subtitle: "Software and Web Developer",
        description: `I'm currently a full-time student 
                    at Cleveland State University 
                    working towards my Bachelor of 
                    Science degree in Computer Science.`,
        suggestion: "While you're here, check out some of my projects!"
    }

    render() {
        return (
            <div className="portfolio-bio">
                <h5 className="portfolio-bio-head">{this.bio.head}</h5>
                <h1 className="portfolio-bio-title">{this.bio.title}</h1>
                <h3 className="portfolio-bio-subtitle">{this.bio.subtitle}</h3>
                <p className="portfolio-bio-description">
                    {this.bio.description}
                    <br /><br />
                    {this.bio.suggestion}
                </p>
            </div>
        );
    }
}

export default Bio