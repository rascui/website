const teams = [
  {
    name: "Tech Ninjas",
    chief: { name: "Ali Roohan", picture: "../assets/members/Ali Roohan.jpg" },
    description:
      "Handles website management, research, and tech-related projects.",
    heads: [
      { name: "M. Haris", title: "Research", picture: "" },
      { name: "Zeeshan Zafar", title: "Training", picture: "" },
      { name: "Husnain Ali", title: "IT", picture: "" },
      { name: "M. Fahad", title: "Hackathon", picture: "" },
    ],
    additionalDescription: "The Tech Ninjas focus on innovative technology solutions and research."
  },
  {
    name: "Marketing Mechs",
    chief: { name: "Anoushay Dawood", picture: "../O-portfolio_webp/members_webp/eva.webp" },
    description:
      "Responsible for promotions, advertising, and campaigns to increase visibility.",
    heads: [
      { name: "Hamnah Butt", title: "Advertisement", picture: "" },
      { name: "Saleena", title: "Campaigns", picture: "" },
      { name: "Zainab", title: "Preparations", picture: "" },
      { name: "Hassan Tariq(", title: "Ideation", picture: "" },
      { name: "Misbah Sehar", title: "Digital Marketing", picture: "" },
    ],
    additionalDescription: "Marketing Mechs specialize in creative advertising and campaign strategies."
  },
  {
    name: "Event Elites",
    chief: { name: "Hamad Qamar", picture: "../O-portfolio_webp/members_webp/eva.webp" },
    description:
      "Organizes and manages logistics, volunteers, and event preparations.",
    heads: [
      { name: "Sufyan Ahmed", title: "Logistics", picture: "" },
      { name: "Ayesha Khalid", title: "Reservations", picture: "" },
      { name: "Adeeb Akram", title: "Volunteers", picture: "" },
      { name: "Fatima Khalid", title: "Decor", picture: "" },
      { name: "Minahil", title: "Operations", picture: "" },
    ],
    additionalDescription: "Event Elites excel in organizing and managing events seamlessly."
  },
  {
    name: "Design Dynamos",
    chief: { name: "Ramla Shahid", picture: "../O-portfolio_webp/members_webp/eva.webp" },
    description:
      "Focuses on graphic design, branding, and creating visual content.",
    heads: [
      { name: "Jawad Hassan", title: "Raster Graphics", picture: "" },
      { name: "Maryam Shahzad", title: "Vector Graphics", picture: "" },
      { name: "Talha Iqbal", title: "Swags", picture: "" },
      { name: "Adnan Haider", title: "Posters", picture: "" },
      { name: "Areeba", title: "Branding", picture: "" },
    ],
    additionalDescription: "Design Dynamos are known for their creative and innovative design solutions."
  },
  {
    name: "Cinematic Cyborgs",
    chief: { name: "Salman Nadeem", picture: "../O-portfolio_webp/members_webp/eva.webp" },
    description:
      "Manages photography, videography, and media production.",
    heads: [
      { name: "Urwah Muhammad", title: "Photography", picture: "" },
      { name: "Azeema Sabir", title: "Media", picture: "" },
      { name: "Saad Ahmed", title: "Reels", picture: "" },
      { name: "Najam ul Hassan", title: "Lighting", picture: "" },
    ],
    additionalDescription: "Cinematic Cyborgs excel in creating visual narratives through innovative media."
  },
  {
    name: "Social Storms",
    chief: { name: "Alishba Zahra", picture: "../O-portfolio_webp/members_webp/eva.webp" },
    description:
      "Oversees social media presence and online engagement.",
    heads: [
      { name: "Maham Tayyab", title: "Stories", picture: "" },
      { name: "Malaika Sohail", title: "Instagram", picture: "" },
      { name: "Mubbara Majid", title: "Linkedin", picture: "" },
      { name: "Abdul Moiz", title: "Youtube", picture: "" },
      { name: "Harris Rasheed", title: "Website", picture: "" },
    ],
    additionalDescription: "Social Storms focuses on enhancing brand visibility and engagement across platforms."
  },
  {
    name: "Public Pioneers",
    chief: { name: "M. Wajahat Ali", picture: "../O-portfolio_webp/members_webp/eva.webp" },
    description:
      "Manages public relations, sponsorships, and outreach activities.",
    heads: [
      { name: "Ummey Habiba", title: "Emails", picture: "" },
      { name: "Danyal Mustafa", title: "Sponsorships", picture: "" },
      { name: "Manal Rehman", title: "Outreach", picture: "" },
      { name: "Laiba Safdar", title: "Promotions", picture: "" },
      { name: "Faizan Javed", title: "Podcast", picture: "" },
    ],
    additionalDescription: "Public Pioneers are dedicated to building strong community relations and partnerships."
  },
  {
    name: "Data Architects",
    chief: { name: "Hussain Raza", picture: "../O-portfolio_webp/members_webp/eva.webp" },
    description:
      "Responsible for data collection, event records, and analytics.",
    heads: [
      { name: "Alizay", title: "Data", picture: "" },
      { name: "Amna Butt", title: "Forms", picture: "" },
      { name: "Hamza Afzal", title: "Community", picture: "" },
      { name: "Aminah Zaka", title: "Resources", picture: "" },
      { name: "Eman Ahmad", title: "Survey", picture: "" },
    ],
    additionalDescription: "Data Architects focus on leveraging data for informed decision-making and insights."
  },
  {
    name: "Generative Genz",
    chief: { name: "Zarnab", picture: "../O-portfolio_webp/members_webp/eva.webp" },
    description:
      "Works on content creation, newsletters, and reporting.",
    heads: [
      { name: "Abdullah Aftab", title: "Prompt Head", picture: "" },
      { name: "Rai Faizan Qasim", title: "Journal", picture: "" },
      { name: "M. Murtaza", title: "Content Creation", picture: "" },
      { name: "Maira Ahmed", title: "Newsletter", picture: "" },
      { name: "Syed Ali Qasim", title: "Report", picture: "" },
    ],
    additionalDescription: "Generative GenZs are known for their innovative approaches to content and communication."
  },
];

const syndicates = [
  { name: "Ali Imran", title: "Chairperson", picture: "", description: "Ali Imran - The leader of the organization, overseeing all major decisions and ensuring smooth operations." },
  { name: "Zoha Waheed", title: "Vice Chairperson", picture: "", description: "Zoha Waheed - The second-in-command, assisting in leadership duties and stepping in when needed." },
  { name: "Fatima Saqib", title: "Wealth Warden", picture: "", description: "Fatima Saqib - Manages financial resources, budgets, and transactions." },
  { name: "M. Fahad Bhatti", title: "Chief Strategist", picture: "", description: "M. Fahad Bhatti - Handles strategic planning and administrative tasks." },
  { name: "Eiman Fatima", title: "Co Strategist", picture: "", description: "Eiman Fatima - Supports strategic initiatives and assists in execution." },
  { name: "Suleiman Butt", title: "Co Strategist", picture: "", description: "Sulaiman Butt - Supports strategic initiatives and assists in execution." },
  { name: "Moiz Akbar", title: "Discipline Warden", picture: "", description: "Moiz Akbar - Ensures rules and regulations are followed within the organization." },
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
      <p>${syndicate.description}</p>
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
        ${team.description} ${team.additionalDescription}
      </p>
    </div>
  </div>
</div>
    `;
});

teamContainer.innerHTML = syndicatesHtml;
