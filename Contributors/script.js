const contributor_inner_container = document.querySelector(
  ".contributor-inner-container"
);

/**
 * Creates a new contributor componenet
 *
 * @param {string} link is the link to the github profile of the contributor
 * @param {string} image_link is the link to the github profile image of the contributor
 * @param {string} name is the username of the contributor
 * @param {string} contributions is the number of contributions user did
 * @param {boolean} ras_member true if contributor is ras member else false
 * */
function createContributor(link, image_link, name, contributions, ras_member) {
  const anchor = document.createElement("a");
  const div = document.createElement("div");
  const github_id = document.createElement("p");
  const member_check = document.createElement("p");
  const no_of_contributions = document.createElement("p");
  const image = document.createElement("img");

  // setting up main anchor
  anchor.href = link;
  anchor.classList.add("contributor");
  anchor.target = "_blank";

  // setting up div
  div.classList.add("contributor-image-container");

  // setting up image
  image.src = image_link;
  div.appendChild(image);

  // setting up texts
  github_id.innerHTML = name;
  github_id.classList.add("github-id");
  member_check.innerHTML = ras_member ? "RAS Member" : "Contributor";
  member_check.classList.add("member-check");
  no_of_contributions.innerHTML = `${contributions} Contributions`;
  no_of_contributions.classList.add("contributions-count");

  // adding into anchor
  anchor.appendChild(div);
  anchor.appendChild(github_id);
  anchor.appendChild(member_check);
  anchor.appendChild(no_of_contributions);

  // adding into the main container
  contributor_inner_container.appendChild(anchor);
}

fetch("https://api.github.com/repos/rascui/website/contributors", {
  method: "GET",
})
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    res.forEach((data) => {
      createContributor(
        data.html_url,
        data.avatar_url,
        data.login,
        data.contributions,
        false
      );
    });
  });
