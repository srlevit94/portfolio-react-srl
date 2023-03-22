import React from 'react';
import '../assets/css/Project.css';

// pulls data from ProjectList.js and populates into a card
export default function Project({name, image, imageHov, repo, appLink}) {

    function over(e) {
        e.currentTarget.src =  imageHov ;
     }
    function out(e) {
        e.currentTarget.src =  image ;
    }
    return (
        <div className="project">
            <img
                alt={name}
                src={image}
                onMouseOver={over}
                onMouseOut={out}
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


