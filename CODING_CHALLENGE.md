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
    {
        "classroom": {
            "id": 1,
            "name": "Pedros Science Classroom",
            "school": 1,
            "code": "0450",
            "grade": {
                "id": 4,
                "name": "5th",
                "created_at": "2020-07-24T16:21:42.095Z",
                "updated_at": "2020-07-24T16:21:42.095Z"
            },

            "created_at": "2020-07-24T16:31:53.641Z",
            "updated_at": "2021-02-03T18:43:43.869Z"
        },
        "learning_standards": [{
                "id": 1,
                "unit": 1,
                "number": 1.3,
                "name": "Mixtures and Solutions",
                "expectations": "Demonstrate that some mixtures maintain physical properties of their ingredients such as iron fillings and sand and sand and water.\nIdentify changes that can occur in the physical properties of the ingredients or solutions such as dissolving salt in water or adding lemon juice to water.",
                "created_at": "2020-07-24T16:53:26.737Z",
                "updated_at": "2020-10-26T15:55:56.582Z",
                "teks": null,
                "days": [{
                    "id": 3,
                    "learning_standard": 1,
                    "number": "3",
                    "template": "<xml xmlns=\"http://www.w3.org/1999/xhtml\"><block type=\"io_digitalwrite\" id=\"j#m#H23NIQH5Wz^I2c^G\" x=\"70\" y=\"224\"><field name=\"PIN\">0</field><value name=\"STATE\"><block type=\"io_highlow\" id=\"7.^n|ek_3R;_Q`K9M!;/\"><field name=\"STATE\">HIGH</field></block></value></block></xml>",
                    "created_at": "2020-07-24T16:57:43.433Z",
                    "updated_at": "2020-07-24T17:15:26.202Z"
                }, {
                    "id": 17,
                    "learning_standard": 1,
                    "number": "1",
                    "template": "<xml xmlns=\"http://www.w3.org/1999/xhtml\"></xml>)",
                    "created_at": "2020-11-30T15:45:33.387Z",
                    "updated_at": "2020-11-30T15:45:33.496Z"
                }, {
                    "id": 18,
                    "learning_standard": 1,
                    "number": "2",
                    "template": "<xml xmlns=\"http://www.w3.org/1999/xhtml\"></xml>)",
                    "created_at": "2020-11-30T15:45:35.939Z",
                    "updated_at": "2020-11-30T15:45:35.991Z"
                }]
            },
            {
                "id": 3,
                "unit": 1,
                "number": 3,
                "name": "Water Cycle",
                "expectations": "Students Learn about Water Cycle",
                "created_at": "2020-11-02T18:26:22.320Z",
                "updated_at": "2020-11-02T18:26:22.344Z",
                "teks": null,
                "days": [{
                    "id": 4,
                    "learning_standard": 3,
                    "number": "1",
                    "template": "<xml xmlns=\"http://www.w3.org/1999/xhtml\"></xml>",
                    "created_at": "2020-11-02T18:26:22.445Z",
                    "updated_at": "2021-01-27T18:25:30.001Z"
                }, {
                    "id": 5,
                    "learning_standard": 3,
                    "number": "2",
                    "template": "<xml xmlns=\"http://www.w3.org/1999/xhtml\"></xml>)",
                    "created_at": "2020-11-02T18:26:22.607Z",
                    "updated_at": "2020-11-02T18:26:22.621Z"
                }, {
                    "id": 6,
                    "learning_standard": 3,
                    "number": "3",
                    "template": "<xml xmlns=\"http://www.w3.org/1999/xhtml\"></xml>)",
                    "created_at": "2020-11-02T18:26:22.735Z",
                    "updated_at": "2020-11-02T18:26:22.750Z"
                }, {
                    "id": 7,
                    "learning_standard": 3,
                    "number": "4",
                    "template": "<xml xmlns=\"http://www.w3.org/1999/xhtml\"></xml>)",
                    "created_at": "2020-11-02T18:26:22.848Z",
                    "updated_at": "2020-11-02T18:26:22.865Z"
                }]
            }
        ]
    }
```

<br/>

## Tasks

> Please make sure to fill this section out as your work on the challenge. It will be included in your final submission. Feel free to makes notes and leave comments

1. Setup
    - [ ] Clone this [repository](https://github.com/CaSMM/STEM-C.git)
    - [ ] Checkout the branch **feature/code-challenge**
    - [ ] Install the dependencies in the [client](https://github.com/STEM-C/CaSMM/tree/feature/code-challenge/client#setup) folder
    - [ ] Start the [client](https://github.com/STEM-C/CaSMM/tree/feature/code-challenge/client#yarn-start) development server and navigate to ``localhost:3000/challenge``

2. Implement the topics view

   You will be implementing the following tasks in the **/client/src/views/Challenge/** directory

   > All of the tasks map to a comment in the **Challenge.js** file
   >
   > Feel free to use the **Challenge.css** file to style your view 

    - [ ] Implement the fetchTopics function
        - [ ] Call the challenge api
        - [ ] Set the learningStandard state with the response data
    - [ ] Render the topics
        - [ ] For each Learning Standard in the response, render a row with its name and expectations.
            - [ ] For each day belonging to a LearningStandards, render a row with its number
                - [ ] Each day row should be wrapped in a link (this is implemented for you in the code) that will take a user to the workspace view that has been previously implemented
                - [ ] **Bonus**: Only show a learningStandard's activities on hover

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