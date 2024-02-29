import jobs from "./data.js";

const listEl = document.querySelector("#list");
jobs.forEach((job) => {
  const newImgEl = document.createElement("img");
  const newLiEl = document.createElement("li");
  const newpEl = document.createElement("p");
  const newh2El = document.createElement("h2");
  const newLanguagesEl = document.createElement("h5");
  const newLanguages = document.createElement("h5");
  const newrole = document.createElement("h5");
  const newlevel = document.createElement("h5");

  newImgEl.src = job.logo;
  newImgEl.width = "99";
  newImgEl.height = "99";
  newpEl.textContent = job.company;
  newh2El.textContent = job.position;
  newLanguagesEl.textContent = job.languages;
  newLanguages.textContent = job.tools;
  newrole.textContent = job.role;
  newlevel.textContent = job.level;

  newpEl.style.color = "#5CA5A5";

  newLanguagesEl.appendChild(newLanguages);
  newLanguagesEl.appendChild(newrole);
  newLanguagesEl.appendChild(newlevel);

  newLiEl.appendChild(newImgEl);
  newLiEl.appendChild(newpEl);
  newLiEl.appendChild(newh2El);
  newLiEl.appendChild(newLanguagesEl);

  listEl.appendChild(newLiEl);
});
