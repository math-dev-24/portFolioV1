import ProjectInterface from "../interface/project"

export const projects: ProjectInterface[] = [
    {
        id: 1,
        title: "Simulate CoolingSystem",
        description: "Réalisation d'un site, permettant de simuler des circuit fluidique, afin de pouvoir avoir toutes les caractéristiques du circuit",
        image: ["appFroidSimul.JPG", "appFroidTools.JPG"],
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
                name: "Python",
                type: "BACK"
            },
            {
                name: "Flask-api",
                type: "BACK"
            }
        ],
        link: "https://app-froid.vercel.app/",
        github: [
            {
                name: "Depôt FRONT PRIVÉ",
                link: "/"
            },
            {
                name: "Depôt BACK PRIVÉ",
                link: "/"
            }
        ]
    },
    {
        id: 2,
        title: "CookChef",
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
        link: "https://cook-chef-one.vercel.app/",
        github: [
            {
                name: "Depôt FRONT",
                link: "https://github.com/math-dev-24/cookChef-React18"
            }
        ]
    },
    {
        id: 3,
        title: "Dashboard - Salle de sport",
        description: `
        <p>Realization of a complete project as part of my training.</p>
        <p>Realization of the organization of the project with notion,
        passing from the dissecting of the project, to the userStory, to the models, Merise Method, ..</p>
        `,
        image: ["dashBoardSportGestion.JPG", "dashBoardSportMaquette.JPG", "dashBoardSport.JPG", "dashBoardSportFocusPartner.JPG"],
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
        link: "https://ecf.math-frigoriste.fr/",
        github: [
            {
                name: "Depôt FRONT",
                link: "https://github.com/math-dev-24/ECF_STUDI_2022_FRONT"
            },
            {
                name: "Depôt BACK-API",
                link: "https://github.com/math-dev-24/ECF_STUDI_2022_BACK"
            }
        ]
    },
    {
        id: 4,
        title: "Boutique FRONT",
        description : "",
        techno: [
            {
                name: "VUE3",
                type: "FRONT"
            },
            {
                name: "TailwindCSS",
                type: "FRONT"
            }
        ],
        link: "/",
        github: [
            {
                name: "Depôt FRONT",
                link: "https://github.com/math-dev-24/boutiqueVue3"
            }
        ]
    },
    {
        id: 5,
        title: "Simon Game",
        description: "creation of the game simon game for school teacher students",
        image: ["simonGame.JPG"],
        techno: [
            {
                name: "VUEJS",
                type: "FRONT"
            },
            {
                name: "TailwindCSS",
                type: "FRONT"
            }
        ],
        link: "https://simon-game-ebon.vercel.app/",
        github: [
            {
                name: "Depôt",
                link: "https://github.com/math-dev-24/SimonGame"
            }
        ]

    },
    {
        id: 6,
        title: "Pokedex",
        description: `
        <p>I used pokemon api for this project. The goal is to train me on the front and the fetch request. And to practice REACT version 18.</p>
        `,
        image: ["PokedexList.JPG", "PokedexDetail.JPG"],
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




