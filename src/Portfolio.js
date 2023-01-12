import React from 'react';
import ReactDOM from 'react-dom';

class Portfolio extends React.Component {
    about = [
        {
            title: "GitHub",
            description: "Put a description here eventually.",
            url: "https://www.github.com/hexxzn",
            icon: <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
        },
        {
            title: "Website",
            description: "Put a description here eventually.",
            url: "http://localhost:3000/",
            icon: <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sitemap" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="3" y="15" width="6" height="6" rx="2"></rect><rect x="15" y="15" width="6" height="6" rx="2"></rect><rect x="9" y="3" width="6" height="6" rx="2"></rect><path d="M6 15v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1"></path><line x1="12" y1="9" x2="12" y2="12"></line></svg>
        },
        {
            title: "Tempo",
            description: "Put a description here eventually.",
            url: "http://localhost:3000/",
            icon: <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-headphones" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="4" y="13" rx="2" width="5" height="7"></rect><rect x="15" y="13" rx="2" width="5" height="7"></rect><path d="M4 15v-3a8 8 0 0 1 16 0v3"></path></svg>
        }
    ]

    listAbout = this.about.map((item) =>
        <div className="portfolio-card">
            <div className="portfolio-card-header">
                <div className="portfolio-card-title">{item.title}</div>
                {item.icon}
            </div>
            <div className="portfolio-card-description">{item.description}</div>
            <a href={item.url} className="portfolio-card-link">Link</a>
        </div>
    );

    render() {
        return (
            <div className="container-fluid">
                <div className="portfolio row">
                    <div className="portfolio-panel col-md">
                        {this.listAbout}
                    </div>
                    <div className="portfolio-panel col-md">
                        <div className="portfolio-project-info">
                            <h5 className="item-head">Lorem Ipsum</h5>
                            <h1 className="item-title">Lorem Ipsum</h1>
                            <h3 className="item-subtitle">Lorem ipsum dolor sit amet.</h3>
                            <p className="item-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                                mollit anim id est laborum.
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