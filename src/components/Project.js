import React from 'react';
import '../assets/css/Project.css';


export default function Project({name, image, repo, appLink}) {
    return (
        <div className="project">
            <img
                alt={name}
                src={image}
            />
            <div className="button-container">
                <a href={repo}> 
                    <button className="btn btn-outline-dark" >GitHub Repo</button>
                </a>
                <a href={appLink}> 
                    <button className="btn btn-outline-dark">Deployed App</button>
                </a>
            </div>
        </div>
    );
}


