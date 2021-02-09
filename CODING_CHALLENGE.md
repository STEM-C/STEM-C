## Coding Challenge

Hello :wave:

Thank you for taking the time to interview with our team. We enjoyed getting to know you better. Based on your skills, passion, and interests, we have decided to move forward with your application. This challenge is designed to give us a glimpse at your practical development skills.

> In no way is this assessment or project perfect – we are still in pre-release development. You may run into issues with the code or documentation. Don't worry too much about this, but please **document** any problems, concerns, and feedback you may have.

<br/>

## Objective

Our project incorporates a lot of different user views. We want you to implement a view that allows a user to select an activity from a list of topics.

<img src="./topics_view.png" style="float: left;" />

You will source the topics data from the topics api:

GET ``https://casmm-staging.herokuapp.com/api/challenge``

> On your first request, the server may be idling, so give it some time to start up

```json
[
    {
        "id": 1,
        "name": "Topic #1",
        "description": "This is it",
        "type": 1,
        "created_at": "2020-04-14T04:52:39.000Z",
        "updated_at": "2020-05-26T02:13:47.153Z",
        "activities": [
            {
                "id": 4,
                "name": "Activity #3",
                "description": "This is the third activity, meant to show off just the Control block category.",
                "difficulty": {
                    "id": 1,
                    "name": "LOW",
                    "created_at": "2020-03-31T15:47:22.000Z",
                    "updated_at": "2020-03-31T15:47:22.000Z"
                },
                "learning_category": {
                    "id": 3,
                    "name": "MAKER_TOOLS",
                    "created_at": "2020-03-31T15:45:14.000Z",
                    "updated_at": "2020-03-31T15:45:14.000Z"
                },
                "topic": 1,
                "created_at": "2020-04-02T15:15:34.000Z",
                "updated_at": "2020-05-26T02:13:47.151Z"
            }
        ]
    },
    {
        "id": 2,
        "name": "Topic #2",
        "description": "This is it",
        "type": 2,
        "created_at": "2020-04-14T04:52:46.000Z",
        "updated_at": "2020-05-26T02:13:39.054Z",
        "activities": [
            {
                "id": 2,
                "name": "Activity #1",
                "description": "This is the first activity, meant to show off two of the categories in the toolbox.",
                "difficulty": {
                    "id": 2,
                    "name": "MEDIUM",
                    "created_at": "2020-03-31T15:47:26.000Z",
                    "updated_at": "2020-03-31T15:47:26.000Z"
                },
                "learning_category": {
                    "id": 1,
                    "name": "ENABLED_LEARNING",
                    "created_at": "2020-03-31T15:45:01.000Z",
                    "updated_at": "2020-03-31T15:45:01.000Z"
                },
                "topic": 2,
                "created_at": "2020-03-31T15:56:45.000Z",
                "updated_at": "2020-05-26T02:13:39.052Z"
            },
            {
                "id": 3,
                "name": "Activity #2",
                "description": "This is the second activity, meant to show off just the logic block category.",
                "difficulty": {
                    "id": 2,
                    "name": "MEDIUM",
                    "created_at": "2020-03-31T15:47:26.000Z",
                    "updated_at": "2020-03-31T15:47:26.000Z"
                },
                "learning_category": {
                    "id": 2,
                    "name": "DEMONSTRATE_LEARNING",
                    "created_at": "2020-03-31T15:45:10.000Z",
                    "updated_at": "2020-03-31T15:45:10.000Z"
                },
                "topic": 2,
                "created_at": "2020-03-31T18:07:23.000Z",
                "updated_at": "2020-05-26T02:13:39.052Z"
            },
            {
                "id": 5,
                "name": "Activity #5",
                "description": "This is the fifth activity, meant to show off every possible category in the toolbox.",
                "difficulty": {
                    "id": 3,
                    "name": "HIGH",
                    "created_at": "2020-03-31T15:47:29.000Z",
                    "updated_at": "2020-03-31T15:47:29.000Z"
                },
                "learning_category": {
                    "id": 1,
                    "name": "ENABLED_LEARNING",
                    "created_at": "2020-03-31T15:45:01.000Z",
                    "updated_at": "2020-03-31T15:45:01.000Z"
                },
                "topic": 2,
                "created_at": "2020-04-15T21:30:02.000Z",
                "updated_at": "2020-05-26T02:13:39.052Z"
            }
        ]
    }
]
```

<br/>

## Tasks

> Please make sure to fill this section out as your work on the challenge. It will be included in your final submission. Feel free to makes notes and leave comments

1. Setup
    - [ ] Clone this [repository](https://github.com/CaSMM/STEM-C.git)
    - [ ] Checkout the branch **feature/code-challenge**
    - [ ] Install the dependencies in the [client](https://github.com/STEM-C/CaSMM/tree/feature/coding-challenge/client#setup) folder
    - [ ] Start the [client](https://github.com/STEM-C/CaSMM/tree/feature/coding-challenge/client#yarn-start) development server and navigate to ``localhost:3000/challenge``

2. Implement the topics view

   You will be implementing the following tasks in the **/client/src/views/Challenge/** directory

   > All of the tasks map to a comment in the **Challenge.js** file
   >
   > Feel free to use the **Challenge.css** file to style your view 

    - [ ] Implement the fetchTopics function
        - [ ] Call the challenge api
        - [ ] Set the topics state with the response data
    - [ ] Render the topics
        - [ ] For each topic in the array, render a row with its name and description
            - [ ] For each activity belonging to a topic, render a row with its name, difficulty, and learning category
                - [ ] Each activity row should be wrapped in a link (this is implemented for you in the code) that will take a user to the workspace view that has been previously implemented
                - [ ] **Bonus**: Only show a topic's activities on hover

3. Reflection

    1. Explain your implementation
    2. What challenges did you face?
    3. How can we improve our documentation?
    4. How can we improve our project structure?
    5. How long did this take you?

<hr/>


Congrats! You have completed the code challenge :clap:

Please follow the instructions below to submit your work.

<br/>

## Submission

First delete the node_modules folder in `client/`, then submit a zipped version of the **client** project folder [here](https://forms.gle/LjVKdpUC3NZ9WcqA6)

> Do not submit the entire CaSMM project or another folder such as `compile/` or `server/`