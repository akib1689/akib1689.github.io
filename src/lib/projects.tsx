import { title } from "process";

export const projects = [
    {
        title: "Dynamic Document Parser",
        description: "A web application built on top of the Tesseract OCR for parsing all sorts of documents. The user can save a template of the document and the a new document can be parsed using the same layout. The user can also download the parsed data in different format like the CSV, Excel, etc. There is also a feature to share the parsed data with the other users.",
        links : [
            {
                name: "Github Organization",
                url: "https://github.com/CSE-408-B1",
                image: "github",
            },
            {
                name: "Live Demo",
                url: "https://view-service.akib-89.me/",
                image: "link",
            },
        ],
        tags: [
            "Node", "Express.js", "Javascript", "HTML", "CSS", "Tesseract OCR", "MongoDB", "Socket.io", "Prisma", "React", "Next.js"
        ],
        image_light: "images/document-parser.gif",
        image_dark: "images/document-parser.gif"
    },
    {
        title: "Typing Tool",
        description: "A typing tool for the developers to improve their typing speed and accuracy. It searched for the random codes from the Github API and displays it to the user. The user can type the code and check the accuracy and speed of their typing.",
        links : [
            {
                name: "Github Repository",
                url: "https://github.com/akib-89/Typing_tool",
                image: "github",
            },
        ],
        tags: [
            "Node", "Express.js", "Javascript", "HTML", "CSS"
        ],
        image_light: "images/typing_tool.png",
        image_dark: "images/typing_tool.png"        
    },
    {
        title: "Tv Shows",
        description: "An android applicaiton that shows the list of tv shows, movies and their details. The user can search for the tv shows and movies and can see the details of the tv shows and movies. This application is developed using the TMDB API.",
        links : [
            {
                name: "Github Repository",
                url: "https://github.com/akib-89/TVShows",
                image: "github",
            },
        ],
        tags: [
            "Android", "Java", "TMDB API", "Retrofit", "Glide", "RecyclerView"
        ],
        image_light: "images/tv_shows.png",
        image_dark: "images/tv_shows.png"

    },
    {
        title: "Bus Management System",
        description: "A web application that manages the bus details and the passengers. The owner can add the busses in their company and the drivers can register themselves. The passengers can get live update of the bus location and can book the tickets.",
        links : [
            {
                name: "Github Repository",
                url: "https://github.com/akib-89/DatabaseTermProject",
                image: "github",
            },
        ],
        tags: [
            "Node", "Express.js", "Javascript", "HTML", "CSS", "Database", "Oracle"
        ],
        image_light: "images/bus_manager.png",
        image_dark: "images/bus_manager.png"
    },
    {
        title: "Cube Simulator",
        description: "A java application that simulates the cube. The user can rotate the cube in any direction and can see the cube from different angles. The user can also shuffle the cube and solve the cube.",
        links : [
            {
                name: "Github Repository",
                url: "https://github.com/akib-89/Qube",
                image: "github",
            },
        ],
        tags: [
            "Java", "Swing", "JavaFX", "Maven"
        ],
    },
    {
        title: "Home Lab Setup",
        description: "A collection of docker-compose files for setting up the home lab. The user can setup the home lab using the docker-compose files. The user can setup the home lab for the different services like the web server, database server, monitoring server, etc.",
        links : [
            {
                name: "Github Repository",
                url: "https://github.com/akib-89/Home-lab-Configuration",
                image: "github",
            },
        ],
        tags: [
            "Docker", "Docker-compose", "Linux", "Nginx", "Prometheus", "Grafana", "Pi-hole", "Portainer", "Traefik", "Sonarr", "Radarr", "Jackett", "Transmission", "Jellyfin", "Nextcloud", "MariaDB", "Postgres", "Redis"
        ],
    },
    {
        title: "Machine Learning Model to predict the Post Traumatic Stress Disorder",
        description: "An web application that collects data for predicting the Post Traumatic Stress Disorder. Currently the machine is not mature and the data is not enough to predict the PTSD. The user can fill the form and the machine learning model will predict the PTSD. The user can also see the accuracy of the model.",
        links : [
            {
                name: "View Questionnaire",
                url: "https://ptsd-research-hub.cse.buet.ac.bd/",
                image: "link",
            },
        ],
        tags: [
            "Python", "Flask", "Machine Learning", "Random Forest Classifier", "Heroku"
        ],
    },
]