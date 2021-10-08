import Project from "../Project";
import React from "react";
import "bootstrap/dist/css/bootsrap.min.css"
const Portfolio = ()=>{
    return (
        <div><h1>Portfolio
            </h1>
            <Project title="DealSella" gitHubLink="https://github.com/Browntuckerr/SteamAPIproject" deployedLink="https://browntuckerr.github.io/SteamAPIproject/"/>
            <Project title="FullStackWorkout" gitHubLink="https://github.com/Browntuckerr/FullStackWorkout" deployedLink="https://github.com/Browntuckerr/FullStackWorkout"/>
            <Project title ="social media app" gitHubLink="https://github.com/Aswebilius/celebrations" deployedLink= "https://aswebilius-chapters.herokuapp.com/posts"/>
        </div>
    )

}
export default Portfolio
