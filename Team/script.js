const teams = [
  {
    name: "Tech Ninjas",
    chief: { name: "Ibraheem Bin Haseeb", picture: "" },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam id temporibus quod harum sit reiciendis aspernatur delectus tempora earum ab!",
    heads: [
      { name: "Yaman Tariq", title: "Research", picture: "" },
      { name: "Saadaan Hassan", title: "Github", picture: "" },
      { name: "TBD", title: "Portal", picture: "" },
      { name: "Ayaan", title: "Sessions", picture: "" },
    ],
  },
  {
    name: "Marketing Mechs",
    chief: { name: "Suleiman Butt", picture: "" },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam id temporibus quod harum sit reiciendis aspernatur delectus tempora earum ab!",
    heads: [
      { name: "Ahmad Zafar", title: "Posters", picture: "" },
      { name: "Areeba Hamid", title: "Campaigns", picture: "" },
      { name: "Maheen Shaukat", title: "Preparations", picture: "" },
      { name: "Ahsan Shahzad", title: "Ideation", picture: "" },
      { name: "Laiba Amir", title: "Digital Marketing", picture: "" },
    ],
  },
  {
    name: "Event Elites",
    chief: { name: "Dabeer Javaid", picture: "" },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam id temporibus quod harum sit reiciendis aspernatur delectus tempora earum ab!",
    heads: [
      { name: "Abdullah", title: "Logistics", picture: "" },
      { name: "Shaheman", title: "Reservations", picture: "" },
      { name: "Volunteers", title: "Volunteers", picture: "" },
      { name: "Laiba", title: "Decor", picture: "" },
      { name: "Malaika", title: "Operations", picture: "" },
    ],
  },
  {
    name: "Design Dynamos",
    chief: { name: "Manal Zahra", picture: "" },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam id temporibus quod harum sit reiciendis aspernatur delectus tempora earum ab!",
    heads: [
      { name: "Abdul Rehman Nadeem", title: "Raster Graphics", picture: "" },
      { name: "TBD", title: "Vector Graphics", picture: "" },
      { name: "Muhammad Awais Rasool", title: "Swags", picture: "" },
      { name: "TBD", title: "Posters", picture: "" },
    ],
  },
  {
    name: "Cinematic Cyborgs",
    chief: { name: "Mahad Iqbal", picture: "" },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam id temporibus quod harum sit reiciendis aspernatur delectus tempora earum ab!",
    heads: [
      { name: "Rafay", title: "Photography", picture: "" },
      { name: "Muaz Jamil", title: "Films", picture: "" },
      { name: "Anam", title: "Media", picture: "" },
      { name: "Bilal", title: "Reels", picture: "" },
      { name: "Faizan Sharjeel", title: "Lighting", picture: "" },
    ],
  },
  {
    name: "Social Storms",
    chief: { name: "Muhammad Qasim", picture: "" },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam id temporibus quod harum sit reiciendis aspernatur delectus tempora earum ab!",
    heads: [
      { name: "TBD", title: "Stories", picture: "" },
      { name: "Saad", title: "Instagram", picture: "" },
      { name: "Mubarra", title: "Linkedin", picture: "" },
      { name: "Raffay", title: "Youtube", picture: "" },
      { name: "TBD", title: "Website", picture: "" },
    ],
  },
  {
    name: "Public Pioneers",
    chief: { name: "TBD", picture: "" },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam id temporibus quod harum sit reiciendis aspernatur delectus tempora earum ab!",
    heads: [
      { name: "Shehryar", title: "Emails", picture: "" },
      { name: "Syed Ahmad Zada", title: "Sponsorships", picture: "" },
      { name: "Muneeb Asif", title: "Outreach", picture: "" },
      { name: "Hais Shoaib", title: "Promotions", picture: "" },
      { name: "Wadood", title: "Podcast", picture: "" },
    ],
  },
  {
    name: "Androids",
    chief: { name: "TBD", picture: "" },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam id temporibus quod harum sit reiciendis aspernatur delectus tempora earum ab!",
    heads: [
      { name: "TBD", title: "Data", picture: "" },
      { name: "TBD", title: "Forms", picture: "" },
      { name: "TBD", title: "Community", picture: "" },
      { name: "TBD", title: "Resources", picture: "" },
    ],
  },
  {
    name: "Droids",
    chief: { name: "TBD", picture: "" },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam id temporibus quod harum sit reiciendis aspernatur delectus tempora earum ab!",
    heads: [
      { name: "TBD", title: "Journal", picture: "" },
      { name: "TBD", title: "Editor", picture: "" },
      { name: "TBD", title: "Newsletter", picture: "" },
      { name: "TBD", title: "Layout", picture: "" },
    ],
  },
];

const syndicates = [
  { name: "Sameer Faisal", title: "Chairperson", picture: "" },
  { name: "Ali Imran", title: "Vice Chairperson", picture: "" },
  { name: "Fatima Saqib", title: "Wealth Warden", picture: "" },
  { name: "Zoha Waheed", title: "Chief Strategist", picture: "" },
  { name: "M. Fahad Bhatti", title: "Co Strategist", picture: "" },
];

// fetch DOM containers
const teamContainer = document.querySelector(".team-container");

// rendering the syndicates HTML dynamically
let syndicatesHtml = "";
syndicates.forEach((syndicate, index) => {
  syndicatesHtml += `
  <div class="syndicate-container ${
    index % 2 === 0 && `right-syndicate-container`
  }">
    <div data-aos="${
      index % 2 === 0 ? `fade-left` : `fade-right`
    }" class="syndicate-image-container">
      <div>
        <img src="../O-portfolio_webp/members_webp/eva.webp" />
      </div>
    </div>
    <div data-aos="${
      index % 2 === 0 ? `fade-right` : `fade-left`
    }" class="syndicate-description-container">
      <div>
        <h1 class="chief syndicate-title">${syndicate.title}</h1>
        <h1 class="syndicate-title">${syndicate.name}</h1>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aut inventore impedit reiciendis distinctio perferendis, suscipit rerum praesentium, ut repudiandae ex at est eligendi minus!</p>
    </div>
  </div>
  `;
});

// rendering the teams HTML dynamically
teams.forEach((team, teamIndex) => {
  let headsHtml = "";

  team.heads.forEach((head) => {
    headsHtml += `
            <div>
              <img src="${
                head.picture === ""
                  ? "../O-portfolio_webp/members_webp/eva.webp"
                  : ""
              }" />
              <div class="head-name">${head.name}</div>
            </div>
        `;
  });

  syndicatesHtml += `
  <div class="team-inner-container">
  <div data-aos="${teamIndex % 2 === 0 ? `fade-left` : `fade-right`}" class="${
    teamIndex % 2 === 0
      ? `right-team-chief-and-title`
      : `left-team-chief-and-title`
  } team-chief-and-title-container ">
    <img src="${
      team.chief.picture === ""
        ? "../O-portfolio_webp/members_webp/eva.webp"
        : ""
    }" />
    <div class="${teamIndex % 2 === 0 ? `right-chief` : `left-chief`}">
      <h1 class="chief">Chief of ${team.name}</h1>
      <h1 class="chief-name">${team.chief.name}</h1>
    </div>
  </div>
  <div class="heads-and-description-container ${
    teamIndex % 2 === 0 && `heads-and-description-inverse`
  }">
    <div class="heads-container" data-aos-delay="150" data-aos="${
      teamIndex % 2 === 0 ? `fade-left` : `fade-right`
    }">
      <h1 class="${teamIndex % 2 === 0 && `right-heads`}">Heads</h1>
      <div class="heads-inner-container">
      ${headsHtml}
      </div>
    </div>
    <div data-aos="${
      teamIndex % 2 === 0 ? `fade-right` : `fade-left`
    }"  data-aos-delay="75" class="description-container ${
    teamIndex % 2 === 0 && `left-description`
  }">
      <h1>${team.name}</h1>
      <p>
        ${team.description}
      </p>
    </div>
  </div>
</div>
    `;
});

teamContainer.innerHTML = syndicatesHtml;
