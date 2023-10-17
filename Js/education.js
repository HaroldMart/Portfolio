let education_container = document.querySelector(".education-list");
  
  const courses = [
      {
          place: "Instituto Tecnologico de las Americas",
          course: "Software Development",
          date: "Jan 2021 - Current",
          description: "I'm studying Software Development at Instituto Tecnologico de las Americas (ITLA), to obtain the necessary knowledge to program software in the most efficient way possible by applying best practices."
      },
      {
        place: "Udemy",
        course: "Frontend Development",
        date: "Jul 2022 - Nov 2022",
        description: " I took a course on the udemy platform on web development that gave me the skills to create web pages using HTML, CSS and JavaScript technologies."
      },
  ];


export default function education() {
  
  courses.forEach((course) => {
      const li = document.createElement("li");
      li.className = "item";
      li.innerHTML = `
          <div class="placeName">
          <span>
            <img src="/assets/icons/doubleRigth.png" alt="" />
          </span>
          <span>${course.place}</span>
        </div>
        <div class="course">
          <h5>${course.course}</h5>
        </div>
        <div class="date">
          <span class="icon"></span>
          <span>${course.date}</span>
        </div>
        <p class="description">
         ${course.description}
        </p>
      `;
  
      education_container.appendChild(li);
  });
}

