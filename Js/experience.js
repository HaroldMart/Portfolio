let experience_container = document.querySelector(".experience-list");
  
  const experiences = [
      {
          place: "Freelancer",
          position: "Developer",
          date: "Jun 2023 - Sep 2023",
          description: "I currently offer my services as a freelancer and maintain my path of constant learning."
      },
      {
        place: "Banco BHD",
        position: "Software Developer",
        date: "Jun 2023 - Sep 2023",
        description: "I did an internship at the BHD company where I learned about the work environment of a company, applying my knowledge and learning new technologies to gain experience."
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
            <div class="position">
            <h5>${experience.position}</h5>
            </div>
            <div class="date">
            <span class="icon"></span>
            <span>${experience.date}</span>
            </div>
            <p class="description">
                ${experience.description}
            </p>
      `;
  
      experience_container.appendChild(li);
  });
}

