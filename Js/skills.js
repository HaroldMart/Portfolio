let skills_container = document.querySelector(".skills-list");
  
  const skills_list = [
      {
        icon: "/assets/icons/html5.svg",
        name: "HTML",
      },
      {
        icon: "/assets/icons/css3.svg",
        name: "CSS",
      },
      {
        icon: "/assets/icons/sass.svg",
        name: "Sass",
      },
      {
        icon: "/assets/icons/javascript.svg",
        name: "Javascript",
      },
      {
        icon: "/assets/icons/bootstrap.svg",
        name: "Bootstrap",
      },
      {
        icon: "/assets/icons/mongodb.svg",
        name: "MongoDB",
      },
      {
        icon: "/assets/icons/sqlserver.svg",
        name: "SQL Server",
      },
      {
        icon: "/assets/icons/csharp.svg",
        name: "C#",
      },
      {
        icon: "/assets/icons/git.svg",
        name: "Git",
      },
      {
        icon: "/assets/icons/mysql.svg",
        name: "MySQL",
      },
  ];


export default function skills() {
  
skills_list.forEach((skill) => {
      const div = document.createElement("div");
      div.className = "icon";
      div.innerHTML = `
        <img src="${skill.icon}" alt="" />
        <span>${skill.name}</span>
      `;
  
      skills_container.appendChild(div);
  });
}

