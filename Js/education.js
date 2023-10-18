let education_container = document.querySelector(".education-list");
  
  const courses = [
      {
          place: "Instituto Tecnologico de las Americas",
          course: "resume.education_course1",
          date: "resume.education_date1",
          description: "resume.education_description1"
      },
      {
        place: "Udemy",
        course: "resume.education_course2",
        date: "resume.education_date2",
        description: "resume.education_description2"
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
          <h5 class="lang" key="${course.course}"></h5>
        </div>
        <div class="date">
          <span class="icon"></span>
          <span class="lang" key="${course.date}"></span>
        </div>
        <p class="description lang" key="${course.description}"></p>
      `;
  
      education_container.appendChild(li);
  });
}
