import logo from '../Images/logox2.svg';

export default function Footer() {
	return (
		<>
			<div className="primary-footer xl-space">
				<div className="primary-footer-wrapper split">
					<a href="http://localhost:3000/" aria-label="acme home page">
						<img src={logo} alt="logo" className="logo-footer"></img>
					</a>

					<div className="footer-nav split">
						<dl className="flow-content text-300">
							<dt>Map</dt>
							<dd>
								<a href="#">Contact</a>
							</dd>
							<dd>
								<a href="#">Privacy</a>
							</dd>
						</dl>

						<dl className="flow-content text-300 ">
							<dt>Resources</dt>
							<dd>
								<a href="#">Courses</a>
							</dd>
							<dd>
								<a href="#">Hacks</a>
							</dd>
							<dd>
								<a href="#">Free stuff</a>
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
