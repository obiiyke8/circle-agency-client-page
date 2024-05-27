const getPosts = async () => {
    try {
        let response = await fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: $(response.status)`);
        }
        let cleanResponse = await response.json();
        let projectContainer = document.querySelector(".project-links");
    // lets a for of loop to keep things simple!
    for (const project of cleanResponse.slice(0, 3)) {
      console.log(project);
      let projectInfo = `
        <div class="project">
            <img src="${project.image}" alt="" />
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="#">Learn More</a>
        </div>
        `;
      projectContainer.innerHTML += projectInfo;
    }


    } catch (errorFromCatchBlock) {
    console.error(errorFromCatchBlock);
    }
};

window.addEventListener("load", getPosts);