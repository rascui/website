import React from 'react';
import ImageGroupPhoto from '../../assets/images/O-portfolio/pictures/group-photo.jpg';

const SectionAbout = () => {
	return (
		<section className="about" id="about">
			<div className="about-content">
				<div className="text-content">
					<h2 className="heading">What is IEEE RAS?</h2>
					<h3>It's 5 Year's of Excelence.</h3>
					<p>
						Welcome to the world of IEEE Robotics and Automation Society (IEEE
						RAS), where innovation meets entertainment. Join us in exploring the
						cutting-edge realm of robotics and automation through enlightening
						seminars and engaging game activities. Discover the perfect balance
						of knowledge and enjoyment with IEEE RAS, where we redefine learning
						through elegance and excitement. At IEEE RAS, we are committed to
						fostering a vibrant community of students and enthusiasts who share
						a passion for robotics, automation, and the limitless possibilities
						they offer. Through our engaging seminars, we aim to unravel the
						mysteries of the technological frontier, providing insights into the
						future of robotics and automation. But it's not all serious business
						– we also believe in the power of fun and camaraderie.
					</p>
					<div className="cvContent">
						<a
							href="https://www.youtube.com/watch?v=z8wFuy_gwcE"
							target="_blank"
							className="btn d-CV" rel="noreferrer"
						>Watch Documentary<i id="movie" className="bx bxs-camera-movie"></i
						></a>
					</div>
				</div>

				<div className="image-content">
					<img src={ImageGroupPhoto} alt="" />
				</div>
			</div>
		</section>
	);
}

export default SectionAbout;
