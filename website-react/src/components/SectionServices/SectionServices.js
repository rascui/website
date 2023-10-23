import React from 'react';
import ImageRing from '../../assets/images/shapes/ring.png';
import ImageCircle from '../../assets/images/shapes/circle.png';
import ImageHalfRing from '../../assets/images/shapes/half-ring.png';

const SectionServices = () => {
	return (
		<section className="services" id="services">
			<div className="main-text">
				<h2 className="heading">Why Join Us?</h2>
				<span>Well, Because we offer you :</span>
			</div>

			<div className="allServices">
				<div className="servicesItem">
					<div className="icon-services">
						<i className="bx bx-game"></i>
						<span></span>
					</div>
					<h3>Student Week</h3>
					<p>
						After becoming a part of our prestigious society, you will have
						exclusive access and role in management and can enjoy our events at
						student week at its best potential
					</p>
				</div>

				<div className="servicesItem">
					<div className="icon-services">
						<i className="bx bx-code-alt"></i>
						<span></span>
					</div>
					<h3>Learn Technologies</h3>
					<p>
						Learn new technologies like web development, app develoment,
						databses and many other hot running frame-works. Our mentors and
						tech team arrange online sessions only for our members.
					</p>
				</div>

				<div className="servicesItem">
					<div className="icon-services">
						<i className="bx bx-message-dots"></i>
						<span></span>
					</div>
					<h3>Community Culture</h3>
					<p>
						Be a part of community where everyone is treated equally. No matter
						you are junior or a senior, the vibe is nothing less than a family.
						Our WhatsApp group is the most active group of participants
					</p>
				</div>

				<div className="servicesItem">
					<div className="icon-services">
						<i className="bx bxs-business"></i>
						<span></span>
					</div>
					<h3>Industry Seminars</h3>
					<p>
						Be a part of a community which has access to industry experts and
						has conducted informative seminars about technology and current
						affairs and meet them personally.
					</p>
				</div>
			</div>

			<div className="showcase">
				<img src={ImageRing} className="ring" />
				<img src={ImageCircle} className="circle" />
				<img src={ImageCircle} className="circle2" />
				<img src={ImageCircle} className="circle3" />
				<img src={ImageHalfRing} className="half-ring" />
			</div>
		</section>
	);
}

export default SectionServices;
