import React from 'react';
import ReactDOM from 'react-dom';

class Portfolio extends React.Component {
    about = [
        {
            title: "Tempo",
            desc: "A Discord bot that makes it easy to stream music directly to your Discord server.",
            lang: "Python",
            url: "https://github.com/hexxzn/tempo",
            icon:   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-headphones" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <rect x="4" y="13" rx="2" width="5" height="7"></rect>
                        <rect x="15" y="13" rx="2" width="5" height="7"></rect>
                        <path d="M4 15v-3a8 8 0 0 1 16 0v3"></path>
                    </svg>
        },
        {
            title: "Rezume",
            desc: "A resume extractor that parses Indeed resumes and outputs formatted MS Word documents.",
            lang: "Python",
            url: "https://github.com/hexxzn/rezume",
            icon:   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-description" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                        <path d="M9 17h6"></path>
                        <path d="M9 13h6"></path>
                    </svg>
        },
        {
            title: "Website",
            desc: "You're looking at it! This site was built from scratch with HTML, CSS and JavaScript.",
            lang: "React",
            url: "http://localhost:3000/",
            icon:   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sitemap" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <rect x="3" y="15" width="6" height="6" rx="2"></rect>
                        <rect x="15" y="15" width="6" height="6" rx="2"></rect>
                        <rect x="9" y="3" width="6" height="6" rx="2"></rect>
                        <path d="M6 15v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1"></path>
                        <line x1="12" y1="9" x2="12" y2="12"></line>
                    </svg>
        }
    ]

    listAbout = this.about.map((item) =>
        <a href={item.url} className="portfolio-card">
            <div className="portfolio-card-header">
                <div className="portfolio-card-title">{item.title}</div>
                {item.icon}
            </div>
            <div className="portfolio-card-description">{item.desc}</div>
            <div className="portfolio-card-lang">{item.lang}</div>
        </a>
    );

    render() {
        return (
            <div className="container-fluid">
                <div className="portfolio row">
                    <div className="portfolio-panel col-md">
                        {this.listAbout}
                    </div>
                    <div className="portfolio-panel col-md">
                        <div className="portfolio-bio">
                            <h5 className="portfolio-bio-head">Introduction</h5>
                            <h1 className="portfolio-bio-title">Hello, I'm George Kilburg.</h1>
                            <h3 className="portfolio-bio-subtitle">Software and Web Developer</h3>
                            <p className="portfolio-bio-description">
                                I'm currently a full-time student at Cleveland State University working towards my Bachelor 
                                of Science degree in Computer Science.
                                <br />
                                <br />
                                While you're here, check out some of my projects!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Portfolio />, document.getElementById('root'));
export default Portfolio;