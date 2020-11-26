import React from 'react';
import pizza_diavola from '../Images/pizza-diabola.svg';
import arrow_white from '../Images/Arrow-white.svg';

export default function Pizzas() {
	return (
		<div className={'pizza-section pizza-section-classic'}>
			<div className="name ">
				<h1>The 5th Hut</h1>
				<h2>Slow Pizza</h2>
			</div>
			<div className={'quote bg-primary-300'}>
				<p className="text-500 quote-text">
					Pizza as it should be. Slow and mouth-watering. Only sourdough.
				</p>
			</div>
			<div className="title flow-content">
				<p className={'text-900'}>All Time</p>
				<p className={'text-900'}>Favourites</p>
				<img src={arrow_white} alt="arrow pointing right"></img>
			</div>
			<div className="pizzas">
				<div className={'flow-content split pizza'}>
					<div className="image">
						<img src={pizza_diavola} alt="pizza-diavola"></img>
					</div>
					<div className="pizza-info flow-content">
						<h2>Diavola</h2>
						<p>Lorem ipsum dolor sit amet.</p>
						<p className="text-400">CZK 250</p>
						<div className="split pizza-buttons-container">
							<button className="btn btn-red ">I WANT</button>
							<button className="btn  btn-blue">MAKE IT YOUR OWN</button>
						</div>
					</div>
				</div>
				<div className={'flow-content split pizza'}>
					<div className="image">
						<img src={pizza_diavola} alt="pizza-diavola"></img>
					</div>
					<div className="pizza-info flow-content">
						<h2>Diavola</h2>
						<p>Lorem ipsum dolor sit amet.</p>
						<p className="text-400">CZK 250</p>
						<div className="split pizza-buttons-container">
							<button className="btn btn-red ">I WANT</button>
							<button className="btn btn-blue" btn-blue>
								MAKE IT YOUR OWN
							</button>
						</div>
					</div>
				</div>
				<div className={'flow-content split pizza'}>
					<div className="image">
						<img src={pizza_diavola} alt="pizza-diavola"></img>
					</div>
					<div className="pizza-info flow-content">
						<h2>Diavola</h2>
						<p>Lorem ipsum dolor sit amet.</p>
						<p className="text-400">CZK 250</p>
						<div className="split pizza-buttons-container">
							<button className="btn btn-red">I WANT</button>
							<button className="btn btn-blue">MAKE IT YOUR OWN</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
