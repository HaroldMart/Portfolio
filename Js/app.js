let divProjects = document.getElementById("projects__content");
const works = [
  {
    image: "images/controlEmpleadosImage.png",
    name: "Employee Management",
    techs: "HTML, CSS, PHP", 
    code_link: "https://github.com/HaroldMart/ControlDeEmpleados",
    key_lang_description: "employeeManagementDescription",
  }, {
    image: "images/contackBook_Image.png",
    name: "Contact Book",
    techs: "HTML, CSS, JS",
    code_link: "https://github.com/HaroldMart/Agenda-de-Contactos-",
    key_lang_description: "contactBookDescription",
  }, {
    image: "images/moviesOverviewImage.png",
    name: "Movies Overview",
    techs: "HTML, CSS, JS",
    code_link: "https://github.com/HaroldMart/MoviesOverview",
    key_lang_description: "moviewsOverviewDescription",
  }, {
    image: "images/roadRunnersImage.jpg",
    name: "RoadRunners",
    techs: "Angular, Expressjs, MongoDB",
    code_link: "https://github.com/HaroldMart/RoadRunners-Backend",
    key_lang_description: "roadRunnersDescription",
  },
  {
    image: "images/pokedex.png",
    name: "Pokedex",
    techs: "ASP.NET, SQL Server",
    code_link: "https://github.com/HaroldMart/Pokedex",
    key_lang_description: "roadRunnersDescription",
  }
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
      <picture class="content__project_image">
        <img src="${project.image}" alt="" />
      </picture>
     
      <div class='project_info'>
        <h3>${project.name}</h3>
        <p class="lang" key="${project.key_lang_description}"></p>
        <p><b class="lang" key="link_technologies"></b>: ${project.techs}</p>
      </div>
      <div class='project_btn'>
      <a href='${project.code_link}' target="_blank"><i class="fi fi-rs-rectangle-code"></i></a>
    </div>
  `;

  divProjects.appendChild(div);
});
