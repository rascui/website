import React, { useEffect, useState } from 'react';
import './SectionStats.css';

const SectionStats = () => {
	const [skillsPlayed, setSkillsPlayed] = useState(false);

	useEffect(() => {
		const firstSkill = document.querySelector(".skill:first-child");
		const skCounters = document.querySelectorAll(".counter span");
		const progressBars = document.querySelectorAll(".skills svg circle");

		const hasReached = (el) => {
			const topPosition = el.getBoundingClientRect().top;
			return window.innerHeight >= topPosition + el.offsetHeight;
		};

		const updateCount = (num, maxNum) => {
			const currentNum = +num.innerText;

			if (currentNum < maxNum) {
				num.innerText = currentNum + 1;
				setTimeout(() => {
					updateCount(num, maxNum);
				}, 12);
			}
		};

		const skillsCounter = () => {
			if (!hasReached(firstSkill)) return;

			setSkillsPlayed(true);

			skCounters.forEach((counter, i) => {
				const target = +counter.dataset.target;
				const strokeValue = 465 - 465 * (target / 100);

				progressBars[i].style.setProperty("--target", strokeValue);

				setTimeout(() => {
					updateCount(counter, target);
				}, 400);
			});

			progressBars.forEach((p) => (p.style.animation = "progress 2s ease-in-out forwards"));
		};

		window.addEventListener("scroll", () => {
			if (!skillsPlayed) skillsCounter();
		});

		// Cleanup the event listener when the component unmounts
		return () => {
			window.removeEventListener("scroll", () => {
				if (!skillsPlayed) skillsCounter();
			});
		};
	}, [skillsPlayed]);

	return (
		<section className="down-box" id="contact">
			<div className="contactSkills">
				<div className="skills">
					<div className="container">
						<div className="skillBox">
							<div className="main-text">
								<h2 className="heading">Our Stats</h2>
								<span>this is where we stand out!</span>
							</div>
							<div className="skill-wrap">
								<div className="skill">
									<div className="outer-circle">
										<div className="inner-circle">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												version="1.1"
												width="180px"
												height="180px"
											>
												<defs>
													<linearGradient id="GradientColor">
														<stop offset="0%" stopColor="#e91e63" />
														<stop offset="100%" stopColor="#673ab7" />
													</linearGradient>
												</defs>
												<circle cx="85" cy="85" r="75" strokeLinecap="round" />
											</svg>
											<h2 className="counter"><span data-target="65">0</span>%</h2>
										</div>
									</div>
									<div className="sk-title">Yearly Growth</div>
								</div>

								<div className="skill">
									<div className="outer-circle">
										<div className="inner-circle">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												version="1.1"
												width="180px"
												height="180px"
											>
												<defs>
													<linearGradient id="GradientColor">
														<stop offset="0%" stopColor="#e91e63" />
														<stop offset="100%" stopColor="#673ab7" />
													</linearGradient>
												</defs>
												<circle cx="85" cy="85" r="75" strokeLinecap="round" />
											</svg>
											<h2 className="counter">
												<span data-target="184">0</span>
											</h2>
										</div>
									</div>
									<div className="sk-title">Total Members</div>
								</div>

								<div className="skill">
									<div className="outer-circle">
										<div className="inner-circle">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												version="1.1"
												width="180px"
												height="180px"
											>
												<defs>
													<linearGradient id="GradientColor">
														<stop offset="0%" stopColor="#e91e63" />
														<stop offset="100%" stopColor="#673ab7" />
													</linearGradient>
												</defs>
												<circle cx="85" cy="85" r="75" strokeLinecap="round" />
											</svg>
											<h2 className="counter"><span data-target="87">0</span>%</h2>
										</div>
									</div>
									<div className="sk-title">Active Ratio</div>
								</div>

								<div className="skill">
									<div className="outer-circle">
										<div className="inner-circle">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												version="1.1"
												width="180px"
												height="180px"
											>
												<defs>
													<linearGradient id="GradientColor">
														<stop offset="0%" stopColor="#e91e63" />
														<stop offset="100%" stopColor="#673ab7" />
													</linearGradient>
												</defs>
												<circle cx="85" cy="85" r="75" strokeLinecap="round" />
											</svg>
											<h2 className="counter"><span data-target="98">0</span>%</h2>
										</div>
									</div>
									<div className="sk-title">Members Satisfaction</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionStats;
