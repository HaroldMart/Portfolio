let experience_container = document.querySelector(".experience-list");
  
  const experiences = [
      {
          place: "Freelancer",
          position: "resume.experience_position1",
          date: "resume.experience_date1",
          description: "resume.experience_description1"
      },
      {
        place: "Banco BHD",
        position: "resume.experience_position2",
        date: "resume.experience_date2",
        description: "resume.experience_description2"
      },
  ];


export default function experience() {
  
   experiences.forEach((experience) => {
      const li = document.createElement("li");
      li.className = "item";
      li.innerHTML = `
            <div class="placeName">
            <span>${experience.place}</span>
            <span>
                <img src="/assets/icons/doubleLeft.png" alt="" />
            </span>
            </div>
            <div class="position" >
            <h5 class="lang" key="${experience.position}"></h5>
            </div>
            <div class="date">
            <span class="icon"></span>
            <span class="lang" key="${experience.date}"></span>
            </div>
            <p class="description lang" key="${experience.description}"></p>
      `;
  
      experience_container.appendChild(li);
  });
}

