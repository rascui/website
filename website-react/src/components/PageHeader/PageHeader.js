import React, { useState } from 'react';
import ImageLogo from '../../assets/images/O-portfolio/pictures/IEEE Text-1.png';

const PageHeader = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
		document.body.classList.toggle("open", !menuOpen);
	};

	const closeMenu = () => {
		setMenuOpen(false);
		document.body.classList.remove("open");
	};

	return (
		<nav>
			<a href="#" className="logo" onClick={closeMenu}>
				<span>
					<img
						className="ieee-text"
						src={ImageLogo}
						alt="IEEE Text"
					/>
				</span>
			</a>
			<ul className={`navlist ${menuOpen ? 'active' : ''}`} onClick={closeMenu}>
				<li><a href="#home" className="active">Home</a></li>
				<li><a href="#about">About Us</a></li>
				<li><a href="#services">Why Us?</a></li>
				<li><a href="#portfolio">Team RAS</a></li>
				<li><a href="#blog">Events & Seminars</a></li>
				<li><a href="#contact">Our Stats</a></li>
			</ul>
			<div className="right-header">
				<a
					href="https://chat.whatsapp.com/KXk9EqEww3z8qaYmBdy9DN"
					target="_blank"
					rel="noopener noreferrer"
					className="btn"
				>
					Let's chat <i className="bx bx-message-dots"></i>
				</a>
				<div className={`menu-icon ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
					<div className="bar"></div>
				</div>
			</div>
		</nav>
	);
};

export default PageHeader;
