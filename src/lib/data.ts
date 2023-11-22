export const links = [
  {
    name: "Accueil",
    hash: "#home",
  },
  {
    name: "À Propos",
    hash: "#about",
  },
  {
    name: "Projets",
    hash: "#projects",
  },
  {
    name: "Compétences",
    hash: "#skills",
  },
  {
    name: "Expériences",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
    {
        title: "Développeur Web",
        company: "GeretonID",
        location: "Paris",
        description:
            "Développement d'une API de type blog avec Django et correction de bugs.",
        tags: ["Django", "VueJS"],
        date: "Mai 2021 - Juin 2021",
    },
    {
        title: "Développeur Full-Stack",
        company: "CN Films",
        location: "Paris",
        description:
            "Participation, au sein d'une équipe de 7 développeurs et un chef de projet, au développement et à l'évolution de 2 applications web dédiées au secteur cinématographique : Cinego Distri, une application permettant aux distributeurs de films de gérer la programmation de leurs films dans les salles de cinémas, et Cinego Stock, une application permettant aux exploitants de salles de cinémas de pouvoir télécharger les films de façon sécurisé afin de les diffuser dans les salles.",
        tags: ["Python", "Pyramid", "Angular"],
        date: "Septembre 2021 - Septembre 2022",
    },
    {
        title: "Développeur Full-Stack",
        company: "Ermes",
        location: "Paris",
        description:
            "Participation, au sein d'une équipe composée dedéveloppeurs, d'administrateurs système et de data scientists, à l'évolution d'une application permettant de créer des campagnes de publicité ciblées. J'ai principalement contribué à l'évolution d'un module d'activation des campagnes sur les différents médias.",
        tags: ["Node.js", "MongoDB", "React"],
        date: "Septembre 2022 - Novembre 2022",
    },
] as const;

export const projectsData = [
    {
        name: "Cocorico",
        description: "Développement d'une plateforme ecommerce fictive",
        tags: ["NestJS", "MongoDB", "React"],
        github: "https://github.com/louis-prevosteau/Cocorico"
    },
    {
        name: "Bakery",
        description: "Développement d'une plateforme de gestion d'une boulangerie",
        tags: ["Node.js", "MongoDB", "React"],
        github: "https://github.com/louis-prevosteau/mern-bakery"
    },
    {
        name: "Jeu d'Echecs",
        description: "Implémentation d'un jeu d'échecs et d'une interface utilisateur",
        tags: ["Java"],
        github: "https://github.com/louis-prevosteau/Chess"
    },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "NestJS",
  "Angular",
  "VueJS",
  "Git",
  "MongoDB",
  "MySQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Java",
  "PHP",
  "Laravel",
  "Symfony",
  "Docker",
  "Méthodes Agiles (SCRUM)"
] as const;