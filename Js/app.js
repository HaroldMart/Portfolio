let divProjects = document.getElementById("projects__content");
const works = [
  {
    image: "images/controlEmpleadosImage.png",
    name: "Employee Management",
    techs: "HTML, CSS, PHP",
    code_link: "https://github.com/HaroldMart/ControlDeEmpleados",
  },
  {
    image: "images/contackBook_Image.png",
    name: "Contact Book",
    techs: "HTML, CSS, JS",
    code_link: "https://github.com/HaroldMart/Agenda-de-Contactos-",
  },
  {
    image: "images/moviesOverviewImage.png",
    name: "Movies Overview",
    techs: "HTML, CSS, JS",
    code_link: "https://github.com/HaroldMart/MoviesOverview",
  },
  {
    image: "images/roadRunnersImage.jpg",
    name: "RoadRunners",
    techs: "Angular, Expressjs, MongoDB",
    code_link: "https://github.com/HaroldMart/RoadRunners-Backend",
  },
  {
    image: "images/pokedex.png",
    name: "Pokedex",
    techs: "ASP.NET, SQL Server, Entity framework",
    code_link: "https://github.com/HaroldMart/Pokedex",
  },
];

AOS.init({ duration: 1300 });

$.getJSON("js/lang.json", function (json) {
  if (!localStorage.getItem("lang")) {
    localStorage.setItem("lang", "en");
  }
  var lang = localStorage.getItem("lang");
  var doc = json;
  $(".lang").each(function (index, element) {
    $(this).text(doc[lang][$(this).attr("key")]);
  }); //Each

  $(".translate").click(function () {
    localStorage.setItem("lang", $(this).attr("id"));
    var lang = $(this).attr("id");
    var doc = json;
    $(".lang").each(function (index, element) {
      $(this).text(doc[lang][$(this).attr("key")]);
    });
  });
});

works.forEach((project) => {
  const div = document.createElement("div");
  div.className = "content__project";
  div.setAttribute("data-aos", "fade-right");
  div.innerHTML = `
  <a href='${project.code_link}' target="_blank">
      <picture class="content__project_image">
        <img src="${project.image}" alt="" />
      </picture>
    </a>
     
      <div class='project_info'>
        <h3 class="title_project">${project.name}</h3>
      
        <p class="p_tech_project"><b class="lang" key="link_technologies"></b>: ${project.techs}</p>
      </div>
  `;

  divProjects.appendChild(div);
});
