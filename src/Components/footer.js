import logo from '../Images/logox2.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<>
			<div className="primary-footer xl-space">
				<div className="primary-footer-wrapper split">
					<a
						href="https://tender-poincare-d7323f.netlify.app"
						aria-label="acme home page"
					>
						<img src={logo} alt="logo" className="logo-footer"></img>
					</a>

					<div className="footer-nav split">
						<dl className="flow-content text-300">
							<dt className="text-400">US</dt>
							<dd>
								<Link to="/contact">CONTACT</Link>
							</dd>
							<dd>
								<Link to="/about">ABOUT</Link>
							</dd>
						</dl>

						<dl className="flow-content text-300 ">
							<dt className="text-400">HUNGRY?</dt>
							<dd>
								<Link to="/">PIZZAS</Link>
							</dd>
							<dd>
								<Link to="/drinks">DRINKS</Link>
							</dd>
						</dl>
					</div>
				</div>
				<div className="split copywrite-social-wrapper center-center">
					<p className="copywrite">
						© 2020 Designed By Alex Perez. All rights reserved{' '}
					</p>
					<div>
						<ul className="footer-social split">
							<li>
								<a href="#">Yt</a>
							</li>
							<li>
								<a href="#">Tw</a>
							</li>
							<li>
								<a href="#">Fb</a>
							</li>
							<li>
								<a href="#">Li</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
