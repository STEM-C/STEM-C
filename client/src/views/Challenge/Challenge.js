import React, {useState, useEffect} from "react"
import './Challenge.css'
import {postJoin} from "../../Utils/requests";
import {message} from "antd";
import {setUserSession} from "../../Utils/AuthRequests";
import '../Student/Student.js'

// Use this for http requests
import axios from 'axios'

function Challenge(props) {
    const [learningStandard, setLearningStandard] = useState({});

    useEffect( () => {
        // Complete the fetchClass function 
        const fetchClass = async () => {

            // Basic authetication required
            let joinCode = '0450';
            let ids = [2, 3];
            const res = await postJoin(joinCode, ids);
            if (res.data) {
                setUserSession(res.data.jwt, JSON.stringify(res.data.students));
            } else {
                message.error(res.err);
            }
            

            // Call the topics api
            // Set the learningStandard state with the response data


        }

        fetchClass()
    }, [])



    const handleSelection = (day) => {
        //Sets the selected day in the localStorage that workspace uses.
        localStorage.setItem("my-day", JSON.stringify(day));

    };

    // Render the LearningStandards
    return (
        // For each Learning Standard in the response, render a row with its name and expectations.

        // For each day belonging to a learningStandard, render a row with its number

        // Each day row should be wrapped in a link that will take a user to the workspace (this is already implemented for you)
        // <Link to={`workspace/`} onClick={() => handleSelection(learning_standards[i].days[j])}>
        //     Your activity code here...
        // </Link>

        // Bonus: Only show a LearningStandards's days on hover

        null

    )
}

export default Challenge;