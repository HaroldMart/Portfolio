let projects_container = document.querySelector(".projects-container");
    
    const works = [
        {
            image: "/assets/images/contackBook_Image.png",
            name: "Contact Book",
            techs: "HTML, CSS, JS",
            code_link: "https://github.com/HaroldMart/Agenda-de-Contactos-",
        },
        {
            image: "/assets/images/moviesOverviewImage.png",
            name: "Movies Overview",
            techs: "HTML, CSS, JS, API",
            code_link: "https://github.com/HaroldMart/MoviesOverview",
        },
        {
            image: "/assets/images/roadRunnersImage.jpg",
            name: "RoadRunners",
            techs: "Angular, Expressjs, MongoDB",
            code_link: "https://github.com/HaroldMart/RoadRunners-Backend",
        },
        {
            image: "/assets/images/pokedex.png",
            name: "Pokedex",
            techs: "ASP .NET, Entity Framework, SQL Server",
            code_link: "https://github.com/HaroldMart/Pokedex",
        },
        {
          image: "/assets/images/rickyAndMortyImage.png",
          name: "Ricky And Morty Website",
          techs: "Sass, ASP .NET, Javascript, API, Docker",
          code_link: "https://github.com/HaroldMart/RickyAndMortyApp",
      },
      {
          image: "/assets/images/EntertainHubAPI_Image.png",
          name: "EntertainHub-API",
          techs: "ASP Web API, Entity Framework, MYSQL",
          code_link: "https://github.com/HaroldMart/EntertainHub-API#entertainhub-api",
      },
    ];

export default function projects() {
    
    works.forEach((project) => {
        const div = document.createElement("div");
        div.className = "project";
        // div.setAttribute("data-aos", "fade-right");
        div.innerHTML = `
            <a class="project" href="${project.code_link}">
            <div class="image">
              <img src="${project.image}" alt="" />
            </div>
            <div class="info">
              <div class="project-title">
                <h4>${project.name}</h4>
              </div>
              <div class="technologies">
                <p>${project.techs}</p>
              </div>
            </div>
          </a>
        `;
    
        projects_container.appendChild(div);
    });
}

