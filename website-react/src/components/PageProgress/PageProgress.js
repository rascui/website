import React, { useEffect } from 'react';
import './PageProgress.css';

const PageProgress = () => {
	useEffect(() => {
		const calcScrollValue = () => {
			let scrollProgress = document.getElementById("progress");
			let pos = document.documentElement.scrollTop;

			let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			let scrollValue = Math.round((pos * 100) / calcHeight);

			if (pos > 100) {
				scrollProgress.style.display = "grid";
			} else {
				scrollProgress.style.display = "none";
			}

			scrollProgress.addEventListener("click", () => {
				document.documentElement.scrollTop = 0;
			});

			scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%,#e6006d ${scrollValue}%)`;
		};

		window.addEventListener('scroll', calcScrollValue);
		calcScrollValue();

		return () => {
			window.removeEventListener('scroll', calcScrollValue);
		}
	}, []);

	return (
		<div id="progress">
			<span id="progress-value">
				<i className="bx bxs-chevrons-up"></i>
			</span>
		</div>
	);
}

export default PageProgress;
