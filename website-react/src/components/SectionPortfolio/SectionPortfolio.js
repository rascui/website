import React, { useEffect } from 'react';
import './SectionPortfolio.css';
import DataSectionPortfolio from '../../assets/data/data-section-portfolio.json';
import mixitup from 'mixitup';

function SectionPortfolio() {
	useEffect(() => {
		const mixer = mixitup('.portfolio-gallery', {
			selectors: {
				target: '.portfolio-box'
			},
			animation: {
				duration: 500
			}
		});
	}, []);

	return (
		<section className="portfolio" id="portfolio">
			<div className="main-text">
				<h2 className="heading">Meet the Team Behind RAS</h2>
				<span>People who are responsible for what IEEE RAS is today.</span>
			</div>
			<div className="fillter-buttons">
				<button className="button mixitup-control-active" data-filter="all">
					All Members
				</button>
				<button className="button" data-filter=".core">Core Body</button>
				<button className="button" data-filter=".chiefs">Chiefs</button>
				<button className="button" data-filter=".co-ordinators">
					Co-ordinators
				</button>
			</div>
			<div className="portfolio-gallery">
				{DataSectionPortfolio.members.map(member => (
					<div className={`portfolio-box mix ${member.type}`} key={member.name}>
						<div className="portfolio-content">
							<h3>{member.name}</h3>
							<p>{member.description}</p>
							{member.instagram && (
								<a
									href={member.instagram}
									target="_blank"
									rel="noopener noreferrer"
									className="readMore"
								>
									<i className="bx bxl-instagram"></i>
								</a>
							)}
							{member.linkedin && (
								<a
									href={member.linkedin}
									target="_blank"
									rel="noopener noreferrer"
									className="readMore"
								>
									<i className="bx bxl-linkedin"></i>
								</a>
							)}
						</div>
						<div className="portfolio-img">
							<img
								src={require(`../../assets/images/O-portfolio/members/${member.image}`)}
								alt={member.name}
							/>
						</div>

					</div>
				))}
			</div>
		</section>
	);
}

export default SectionPortfolio;
