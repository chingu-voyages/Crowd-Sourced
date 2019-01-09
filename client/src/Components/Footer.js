import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
	return (
		<footer>
			<a href="https://github.com/chingu-voyages/bears-project-13">Code Source</a>
			<br />
			<span className="sub-title">Created By:</span>
			<br />
			<a className="single-author" href="https://github.com/virenb">
				Viren Bhagat
			</a>
			<br />
			<a className="single-author" href="https://josuerojasrojas.github.io">
				Josue Rojas
			</a>
		</footer>
	);
};

export default Footer;
