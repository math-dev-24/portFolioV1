import ProjectInterface from "../interface/project"

export const projects: ProjectInterface[] = [
    {
        id: 1,
        title: "Simulate CoolingSystem",
        description: "Réalisation d'un site, permettant de simuler des circuit fluidique, afin de pouvoir avoir toutes les caractéristiques du circuit",
        image: ["appFroidSimul.jpg", "appFroidTools.jpg"],
        techno: [
            {
                name: "VUE3",
                type: "FRONT"
            },
            {
                name: "TailwindCSS",
                type: "FRONT"
            },
            {
                name: "Python - Flask-api",
                type: "BACK"
            }
        ],
        link: "https://app-froid.vercel.app/"
    },
    {
        id: 2,
        title: "CockChef",
        description: "Projet d'école afin de réaliser la partie front d'un marmiton bis.",
        image: ["CookChefHome.JPG", "CookChefAdmin.JPG"],
        techno: [
            {
                name: "REACT18",
                type: ""
            },
            {
                name: "TailwindCSS",
                type: "FRONT"
            }
        ],
        link: "https://cook-chef-one.vercel.app/"
    },
    {
        id: 3,
        title: "Dashboard gestion salle de sport",
        description: `
        <p>Realization of a complete project as part of my training.</p>
        <p>Realization of the organization of the project with notion,
        passing from the dissecting of the project, to the userStory, to the models, Merise Method, ..</p>
        `,
        image: ["dashBoardSportGestion.JPG","dashBoardSportMaquette.JPG","dashBoardSport.jpg","dashBoardSportFocusPartner.JPG"],
        techno: [
            {
                name: "VUE3",
                type: "FRONT"
            },
            {
                name: "TailwindCSS",
                type: "FRONT"
            },
            {
                name: "API PHP",
                type: "BACK"
            },
            {
                name: "SQL",
                type: "BACK"
            }
        ],
        link: "https://ecf.math-frigoriste.fr/"
    },
    {
        id:4,
        title: "Pokedex",
        description: `
        <p>I used pokemon api for this project. The goal is to train me on the front and the fetch request. And to practice REACT version 18.</p>
        `,
        image: ["PokedexList.jpg","PokedexDetail.jpg"],
        techno: [
            {
                name: "REACT18",
                type: "FRONT"
            },
            {
                name: "TailwindCSS",
                type: "FRONT"
            }
        ],
        link: "https://pokedex-indol-nu.vercel.app/"
    }
]




