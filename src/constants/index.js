import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    bds,
    sxc,
    tu,
    python,
    Cicon,
    Cplusplus,
    Sikka,
    FYPDS,
    Dijikstra,
    github,
    facebook,
    instagram,
    linkedin,
    twitter,
    gmail
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "project",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "C",
      icon: Cicon,
    },
    {
      name: "C++",
      icon: Cplusplus,
    },
  ];
  
  const experiences = [
    {
      title: "Bal Deeksha Sadan School",
      location: "Gwarko, Lalitpur",
      icon: bds,
      iconBg: "white",
      date: "2012 - 2017",
      points: [
        
      ],
    },
    {
      title: "St.Xavier's College",
      location: "Maitighar, Kathmandu",
      icon: sxc,
      iconBg: "white",
      date: "2017 - 2019",
      points: [
        
      ],
    },
    {
      title: "Tribhuvan University",
      location: "Pulchowk, Lalitpur",
      icon: tu,
      iconBg: "white",
      date: "2020 - 2024",
      points: [
        
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Final Year Project Database System",
      description:
        "FYPDS is a database management system, meaning its chief purpose is to bring in data, organize it and store it optimally. It is primarily written in Javascript, HTML, and EJS and is a web application.",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
        {
          name: "pico css",
          color: "pink-text-gradient",
        },
      ],
      image: FYPDS,
      source_code_link: "https://github.com/Nisan-Shrestha/Software-Engineering-Project.git",
    },
    {
      name: "Sikka",
      description:
        "Sikka is an application that aims to allow easy division of money. Usually, when a group of people go out to restaurants, one or two of them pays for the meal and it can be quite exhausting to calculate the amount one member owes the other, Sikka eases this calculation and provides an interface where a user simply needs to create a group, add the members and the contributors of the group. Sikka will then provide a description about which member owes which other member money.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "solidity",
          color: "green-text-gradient",
        },
        {
          name: "metamask",
          color: "pink-text-gradient",
        },
      ],
      image: Sikka,
      source_code_link: "https://github.com/liza1212/Sikka.git",
    },
    {
      name: "Dijikstra",
      description:
        "A visual representation of Dijikstra algorithm for better understanding.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "js",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "p5.js",
          color: "green-text-gradient",
        },
      ],
      image: Dijikstra,
      source_code_link: "https://github.com/liza1212/Shortestpath.git",
    },
  ];

  const contactInfo=[
    {
      name:"Facebook",
      icon: facebook,
      link:"https://www.facebook.com/profile.php?id=100004522819005"
    },
    {
      name:"Instagram",
      icon: instagram,
      link:"https://www.instagram.com/pgubzu/"
    },
    {
      name:"Github",
      icon: github,
      link:"https://github.com/Daskhas"
    },
    {
      name:"Twitter",
      icon: twitter,
      link:"https://twitter.com/pranabgubhaju"
    },
    {
      name:"Linkedin",
      icon: linkedin,
      link:"https://www.linkedin.com/in/pranab-ratna-gubhaju/"
    },
    // {
    //   name:"Gmail",
    //   icon: gmail,
    //   link:"pranabgubhaju@gmail.com"
    // },
  ]
  
  export { services, technologies, experiences, testimonials, projects,contactInfo };