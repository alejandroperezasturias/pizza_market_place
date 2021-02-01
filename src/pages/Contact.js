import { useState } from 'react';
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';
import logo from '../Images/logox2.svg';
import Form from '../styles-material/form';



export default function Contact() {
	const [viewport, setViewport] = useState({
		width: '90vw',
		height: 360,
		latitude: 50.0755,
		longitude: 14.4378,
		zoom: 8,
		zoom: 10,
		flyToLocation: true,
		center: [50.0755, 14.4378],
	});
	const attributionStyle = {
		right: -1,
		top: -1,
	};

	return (
		<div className={'contact-section xl-space'}>
			<div className="map">
				<ReactMapGL
					mapboxApiAccessToken={process.env.REACT_APP_TOKEN_MAP}
					mapStyle="mapbox://styles/alexcabanaquinta/ckkjma0gt1z5517nsq3i8t8sp"
					{...viewport}
					onViewportChange={(nextViewport) => setViewport(nextViewport)}
				>
					<Marker
						latitude={50.0755}
						longitude={14.4378}
						offsetLeft={-60}
						offsetTop={-40}
					>
						<img src={logo} alt="logo" className="map-marker-img"></img>
					</Marker>
					<NavigationControl compact={true} style={attributionStyle} />
				</ReactMapGL>
			</div>
			<div className="xl-space form-section split">
				<div className="form-title">
					<h2 className={"text-900"}>Contact Us!</h2>
				</div>
				<Form />
			</div>
		</div>
	);
}
