const teams = [
  {
    name: "Tech Ninjas",
    chief: { name: "Ali Roohan", picture: "../assets/members/Ali Roohan.jpg" },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam id temporibus quod harum sit reiciendis aspernatur delectus tempora earum ab!",
    heads: [
      { name: "M. Haris", title: "Research", picture: "" },
      { name: "Zeeshan Zafar", title: "Training", picture: "" },
      { name: "Husnain Ali", title: "IT", picture: "" },
      { name: "M. Fahad", title: "Hackathon", picture: "" },
    ],
  },
  {
    name: "Marketing Mechs",
    chief: { name: "Anoushay Dawood", picture: "../O-portfolio_webp/members_webp/eva.webp" },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam id temporibus quod harum sit reiciendis aspernatur delectus tempora earum ab!",
    heads: [
      { name: "Hamnah Butt", title: "Advertisement", picture: "" },
      { name: "Saleena", title: "Campaigns", picture: "" },
      { name: "Zainab", title: "Preparations", picture: "" },
      { name: "Hassan Tariq(", title: "Ideation", picture: "" },
      { name: "Misbah Sehar", title: "Digital Marketing", picture: "" },
    ],
  },
  {
    name: "Event Elites",
    chief: { name: "Hamad Qamar", picture: "../O-portfolio_webp/members_webp/eva.webp" },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam id temporibus quod harum sit reiciendis aspernatur delectus tempora earum ab!",
    heads: [
      { name: "Sufyan Ahmed", title: "Logistics", picture: "" },
      { name: "Ayesha Khalid", title: "Reservations", picture: "" },
      { name: "Adeeb Akram", title: "Volunteers", picture: "" },
      { name: "Fatima Khalid", title: "Decor", picture: "" },
      { name: "Minahil", title: "Operations", picture: "" },
    ],
  },
  {
    name: "Design Dynamos",
    chief: { name: "Ramla Shahid", picture: "../O-portfolio_webp/members_webp/eva.webp" },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam id temporibus quod harum sit reiciendis aspernatur delectus tempora earum ab!",
    heads: [
      { name: "Jawad Hassan", title: "Raster Graphics", picture: "" },
      { name: "Maryam Shahzad", title: "Vector Graphics", picture: "" },
      { name: "Talha Iqbal", title: "Swags", picture: "" },
      { name: "Adnan Haider", title: "Posters", picture: "" },
      { name: "Areeba", title: "Branding", picture: "" },
    ],
  },
  {
    name: "Cinematic Cyborgs",
    chief: { name: "Salman Nadeem", picture: "../O-portfolio_webp/members_webp/eva.webp" },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam id temporibus quod harum sit reiciendis aspernatur delectus tempora earum ab!",
    heads: [
      { name: "Urwah Muhammad", title: "Photography", picture: "" },
      { name: "Azeema Sabir", title: "Media", picture: "" },
      { name: "Saad Ahmed", title: "Reels", picture: "" },
      { name: "Najam ul Hassan", title: "Lighting", picture: "" },
    ],
  },
  {
    name: "Social Storms",
    chief: { name: "Alishba Zahra", picture: "../O-portfolio_webp/members_webp/eva.webp" },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam id temporibus quod harum sit reiciendis aspernatur delectus tempora earum ab!",
    heads: [
      { name: "Maham Tayyab", title: "Stories", picture: "" },
      { name: "Malaika Sohail", title: "Instagram", picture: "" },
      { name: "Mubbara Majid", title: "Linkedin", picture: "" },
      { name: "Abdul Moiz", title: "Youtube", picture: "" },
      { name: "Harris Rasheed", title: "Website", picture: "" },
    ],
  },
  {
    name: "Public Pioneers",
    chief: { name: "M. Wajahat Ali", picture: "../O-portfolio_webp/members_webp/eva.webp" },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam id temporibus quod harum sit reiciendis aspernatur delectus tempora earum ab!",
    heads: [
      { name: "Ummey Habiba", title: "Emails", picture: "" },
      { name: "Danyal Mustafa", title: "Sponsorships", picture: "" },
      { name: "Manal Rehman", title: "Outreach", picture: "" },
      { name: "Laiba Safdar", title: "Promotions", picture: "" },
      { name: "Faizan Javed", title: "Podcast", picture: "" },
    ],
  },
  {
    name: "Data Architects",
    chief: { name: "Hussain Raza", picture: "../O-portfolio_webp/members_webp/eva.webp" },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam id temporibus quod harum sit reiciendis aspernatur delectus tempora earum ab!",
    heads: [
      { name: "Alizay", title: "Data", picture: "" },
      { name: "Amna Butt", title: "Forms", picture: "" },
      { name: "Hamza Afzal", title: "Community", picture: "" },
      { name: "Aminah Zaka", title: "Resources", picture: "" },
      { name: "Eman Ahmad", title: "Survey", picture: "" },
    ],
  },
  {
    name: "Generative Genz",
    chief: { name: "Zarnab", picture: "../O-portfolio_webp/members_webp/eva.webp" },
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam id temporibus quod harum sit reiciendis aspernatur delectus tempora earum ab!",
    heads: [
      { name: "Abdullah Aftab", title: "Prompt Head", picture: "" },
      { name: "Rai Faizan Qasim", title: "Journal", picture: "" },
      { name: "M. Murtaza", title: "Content Creation", picture: "" },
      { name: "Maira Ahmed", title: "Newsletter", picture: "" },
      { name: "Syed Ali Qasim", title: "Report", picture: "" },
    ],
  },
];

const syndicates = [
  { name: "Ali Imran", title: "Chairperson", picture: "" },
  { name: "Zoha Waheed", title: "Vice Chairperson", picture: "" },
  { name: "Fatima Saqib", title: "Wealth Warden", picture: "" },
  { name: "M. Fahad Bhatti", title: "Chief Strategist", picture: "" },
  { name: "Eiman Fatima", title: "Co Strategist", picture: "" },
  { name: "Suleiman Butt", title: "Co Strategist", picture: "" },
  { name: "Moiz Akbar", title: "Discipline Warden", picture: "" },
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
        : team.chief.picture
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
