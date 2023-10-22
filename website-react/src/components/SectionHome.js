import React, { useEffect, useRef } from 'react';
import ImageIEEEMascot from '../assets/images/O-portfolio/pictures/IEEE - Mascottt.png';

const SectionHome = () => {
	const textRef = useRef(null);

	useEffect(() => {
		if (textRef.current) {
			const text = textRef.current;
			text.innerHTML = text.innerHTML.split("").map((char, i) =>
				`<b style="transform:rotate(${i * 6.3}deg)">${char}</b>`
			).join("");
		}
	}, []);

	return (
		<section className="home" id="home">
			<div className="hero-info">
				<h3>Welcome To A New Dimension</h3>
				<h1>Hello Humanoids.</h1>

				<div className="text-animate">
					<h2>IEEE RAS</h2>
				</div>
				<h2>#RASitUp</h2>

				<p>
					"Charting a Futuristic Course: Our University's Robotic Society
					Leading the Way Towards a Technological Tomorrow, Where Learning and
					Living Are Redefined."
				</p>

				<div className="btn-box">
					<a
						href="mailto:ieeerascui@mail.com"
						className="btn"
					>
						Collab Now! <i className="bx bx-right-arrow-alt"></i>
					</a>
					<a
						href="https://tally.so/r/wgdK1d"
						target="_blank"
						rel="noopener noreferrer"
						className="btn d-CV"
					>
						Pitch Ideas <i className="bx bx-bulb"></i>
					</a>
				</div>

				<div class="social-media">
					<div class="bg-icon">
						<a
							href="https://www.instagram.com/ras.cui/"
							target="_blank"
							rel="noreferrer"
						>
							<i class="bx bxl-instagram"></i>
						</a>
						<span></span>
					</div>
					<div class="bg-icon">
						<a
							href="https://www.facebook.com/rascuilhr/"
							target="_blank"
							rel="noreferrer"
						>
							<i class="bx bxl-facebook"></i>
						</a>
						<span></span>
					</div>
					<div class="bg-icon">
						<a
							href="https://www.linkedin.com/company/rascui"
							target="_blank"
							rel="noreferrer"
						>
							<i class="bx bxl-linkedin"></i>
						</a>
						<span></span>
					</div>
					<div class="bg-icon">
						<a
							href="https://chat.whatsapp.com/KXk9EqEww3z8qaYmBdy9DN"
							target="_blank" rel="noreferrer"
						>
							<i class="bx bxl-whatsapp"></i>
						</a>
						<span></span>
					</div>
				</div>
			</div>
			<div className="img-hero">
				<img src={ImageIEEEMascot} alt="IEEE Mascot" />
				<div className="rotate-text">
					<div className="text">
						<p ref={textRef}>IEEE RAS. IEEE RAS. IEEE RAS. IEEE RAS. IEEE RAS. IEEE RAS.</p>
					</div>
					<span><i></i></span>
				</div>
			</div>
		</section>
	);
}

export default SectionHome;