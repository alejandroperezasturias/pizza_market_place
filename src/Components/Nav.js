import React from 'react';
import logo from '../Images/logo.svg';
import '../css/nav.css';

export default function Nav() {
	return (
		<header className="header">
			<nav className="nav">
				<a href="" aria-label="pizza-page" className="logo flow-content">
					<div>
						<img src={logo} alt="img/logo.svg" />
					</div>
				</a>
				<div className="nav-links">
					<ul>
						<li>
							<a>Pizza</a>
						</li>
						<li>
							<a>Drinks</a>
						</li>
						<li>
							<a>About</a>
						</li>
						<li>
							<a>Contact</a>
						</li>
					</ul>
				</div>
				<div className="trolly">
					<h2>Trolly</h2>
				</div>
			</nav>
		</header>
	);
}
