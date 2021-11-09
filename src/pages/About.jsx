import { useState, useEffect } from "react"


function About(props) {
    // create state to hold about data
    const [about, setAbout] = useState(null)

    // create function to make API call
    const getAboutData = async () => {
        // make API call and get response
        const response = await fetch(props.URL + "about");
        // turn response into javascript object
        const data = await response.json();
        // set about state to data
        setAbout(data)
    }

    // make initial call for data inside useEffect
    useEffect(() => getAboutData(), [])

    // define function that returns JSX needed once data is received
    const loaded = () => (
        <div>
            <h2>{about.name}</h2>
            <h3>{about.email}</h3>
            <p>{about.bio}</p>
        </div>
    )

    // if data arrives return result of loaded function, if not return <h1>loading...</h1>
    return about ? loaded() : <h1>Loading...</h1>

}

export default About