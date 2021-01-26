import pizza_diavola from '../Images/pizza-diabola.svg';
import pizza_margherita from '../Images/margharita_1.svg';
import pizza_buffalina from '../Images/buffalina.svg';
import pizza_funghi from '../Images/funghi.svg';
import pizza_prosciutto from '../Images/prosciuto.svg';
import pilsner_urquell from '../Images/pilnser_2.svg';
import estrella_galicia from '../Images/estrella_galicia.svg';


export const PizzasData = () => {
	return [
		{
			name: 'Pizza Margherita',
			ingredients: [
				{ ingredient: 'Mozzarella', basic: false, extra: false, id: 'mozzarella1' },
				{ ingredient: 'Tomato Sauce', basic: true, id: 'tomato_sauce' },
				{ ingredient: 'Olives', basic: false, extra: false, id: 'olives1' },
			],
			image: pizza_margherita,
			price: 230,
			id: 'margarita',
			vegetarian: true,
			vegan: false,
			spicy: false,
			all_time_favourite: true,
			amount: 1,
			is_pizza: true
		},
		{
			name: 'Pizza Diavola',
			ingredients: [
				{ ingredient: 'Pepperoni', basic: false, extra: true, id: 'pepperoni4' },
				{ ingredient: 'Tomato Sauce', basic: true, id: 'tomato_sauce4' },
				{ ingredient: 'Champignon', basic: false, extra: true, id: 'champignon4' },
			],
			image: pizza_diavola,
			id: 'diavola1',
			vegetarian: false,
			spicy: true,
			price: 240,
			vegan: false,
			all_time_favourite: true,
			amount: 1,
			is_pizza: true
		},
		{
			name: 'Pizza Bufffalina',
			ingredients: [
				{ ingredient: 'Burrata', basic: false, extra: false, id: 'burrata3' },
				{ ingredient: 'Tomato Sauce', basic: true, id: 'tomato_sauce3' },
				{ ingredient: 'Olives', basic: false, extra: false, id: 'olives3' },
				{ ingredient: 'Rucula', basic: false, extra: false, id: 'rucula3' },
			],
			image: pizza_buffalina,
			id: 'bufffalina1',
			vegetarian: true,
			vegan: false,
			price: 240,
			spicy: false,
			all_time_favourite: true,
			amount: 1,
			is_pizza: true
		},
		{
			name: 'Pizza BBQ',
			ingredients: [
				{ ingredient: 'Pepperoni', basic: false, extra: true, id: 'pepperoni4' },
				{ ingredient: 'BBQ Sauce', basic: true, id: 'bbqSauce4' },
				{ ingredient: 'Champignon', basic: false, extra: true, id: 'champignon4' },
				{ ingredient: 'Chicken', basic: false, extra: true, id: 'chicken1' },
			],
			image: pizza_diavola,
			id: 'bbq4',
			vegetarian: false,
			price: 210,
			spicy: false,
			vegan: false,
			all_time_favourite: false,
			amount: 1,
			is_pizza: true
		},
		{
			name: 'Pizza Funghi',
			ingredients: [
				{ ingredient: 'Mozzarella', basic: false, extra: false, id: 'mozzarella2' },
				{ ingredient: 'Tomato Sauce', basic: true, id: 'tomato_sauce2' },
				{ ingredient: 'Champignon', basic: false, extra: false, id: 'champignon5' },
			],
			image: pizza_funghi,
			id: 'fungui',
			price: 200,
			vegetarian: true,
			vegan: false,
			spicy: false,
			all_time_favourite: false,
			amount: 1,
			is_pizza: true
		},
		{
			name: 'Pizza Prosciutto',
			ingredients: [
				{ ingredient: 'Burrata', basic: false, extra: false, id: 'burrata2' },
				{ ingredient: 'Tomato Sauce', basic: true, id: 'tomato_sauce2' },
				{ ingredient: 'Prosciutto', basic: false, extra: false, id: 'prosciutto2' },
			],
			image: pizza_prosciutto,
			id: 'prosciutto',
			price: 250,
			vegetarian: false,
			vegan: false,
			spicy: false,
			all_time_favourite: false,
			amount: 1,
			is_pizza: true
		},
		{
			name: 'Pilsner Urquell',
			image: pilsner_urquell,
			id: 'pilnserUrquell',
			price: 50,
			vegetarian: false,
			vegan: false,
			spicy: false,
			all_time_favourite: false,
			amount: 1,
			is_pizza: false,
			ingredients: [
				
			],
		},
		{
			name: 'Pilsner',
			image: pilsner_urquell,
			id: 'pilnserUrquell_2',
			price: 50,
			vegetarian: false,
			vegan: false,
			spicy: false,
			all_time_favourite: false,
			amount: 1,
			is_pizza: false
			,ingredients: [
				
			],
		},
		{
			name: 'Estrella Galicia',
			image: estrella_galicia,
			id: 'estrellaGalicia_3',
			price: 50,
			vegetarian: false,
			vegan: false,
			spicy: false,
			all_time_favourite: false,
			amount: 1,
			is_pizza: false
			,ingredients: [
				
			],
		},
		
	];
};
