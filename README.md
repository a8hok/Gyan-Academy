GyanAcademy-Client

This is the client-side code for GyanAcademy, an e-learning platform where students can enroll in various courses and access educational materials.

The front-end was built with React and Bootstrap, and it communicates with the GyanAcademy-Server API to retrieve and manipulate data.
Features

    User authentication (sign up, login, logout)
    Browse courses by category and search by keyword
    Enroll in courses and view course details
    Watch video lessons, read documents, and take quizzes
    View progress and grades for each course
    Edit profile information and change password

Installation

To run the client code locally, follow these steps:

    Clone this repository: git clone https://github.com/hari1538radha/GyanAcademy-Client.git
    Install dependencies: npm install
    Start the development server: npm start

By default, the client will connect to the server API at http://localhost:8000.
Configuration

To configure the client to connect to a different server, create a .env file in the root directory and add the following variable:

arduino

REACT_APP_API_BASE_URL=http://your-server-url.com

Replace http://your-server-url.com with the base URL of your server API.
License

This project is licensed under the MIT License. See the LICENSE file for details.
Acknowledgements

This project was inspired by various e-learning platforms and was created as a personal project by [your name]. Special thanks to [name of contributor] for their contributions to the project.
