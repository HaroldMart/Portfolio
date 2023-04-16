let divProjects = document.getElementById("projects__content");
const works = [
  {
    image: "images/controlEmpleadosImage.png",
    name: "Control de Empleados",
    description: "En este proyecto utilice tecnologias como PHP para realizar una pagina que me permitiera guardar datos de empleados de una empresa, estos datos los guarda en una carpeta que esta en el proyecto.",
    techs: "HTML, CSS, PHP",
    host: "https://controlempleados098.000webhostapp.com/index.php",
    code_link: "https://github.com/HaroldMart/ControlDeEmpleados",
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
      <picture class="content__project_image">
        <img src="${project.image}" alt="" />
      </picture>
      <div class='project_btn'>
        <a href='${project.host}' target="_blank"><i class="fi fi-sr-globe"></i></a>
        <a href='${project.code_link}' target="_blank"><i class="fi fi-rs-rectangle-code"></i></a>
      </div>
      <div class='project_info'>
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <p><b>Tecnologias: </b> ${project.techs}</p>
      </div>
  `;

  divProjects.appendChild(div);
});
