import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import './Topics.css'

// Use this for http requests
import axios from 'axios'

function Challenge(props) {
    const [topics, setTopics] = useState([])

    useEffect( () => {
        // Implement the fetchTopics function
        const fetchTopics = async () => {
            // Call the topics api
            // Set the topics state with the response data
        }

        fetchTopics()
    }, [])

    // Render the topics
    return (
        // For each topic in the array, render a row with its name and description

        // For each activity belonging to a topic, render a row with its name, difficulty, and learning category

        // Each activity row should be wrapped in a link that will take a user to the workspace (this is already implemented for you)
        // <Link to={`workspace/${topics[i].activities[i].name}`} onClick={() => props.setSelectedActivity(topics[i].activities[i])}>
        //     Your activity code here...
        // </Link>

        // Bonus: Only show a topic's activities on hover

        null
    )
}

export default Challenge;