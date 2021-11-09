import { useState, useEffect } from "react"

function Projects(props) {
    // create state to hold project data
    const [projects, setProjects] = useState(null)

    // create function to make API call
    const getProjectsData = async () => {
        // make API call and get response
        const response = await fetch(props.URL + "projects");
        // turn response into javascript object
        const data = await response.json();
        // set projects state to data
        setProjects(data)
    }

    // make initial call for data inside useEffect
    useEffect(() => getProjectsData(), [])

    // define function that returns JSX
    const loaded = () => {
        return projects.map((project) => (
           <div>
               <h1>{project.name}</h1>
               <img src={project.image}/>
               <a href={project.git}>
                   <button>Github</button>
               </a>
               <a href={project.live}>
                   <button>Live Site</button>
               </a>
           </div> 
        ))
    }

    return projects ? loaded() : <h1>Loading..</h1>
}

export default Projects