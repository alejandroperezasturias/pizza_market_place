import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useContext } from 'react';
import { PizzaContext } from '../App';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: '#76d8f4',
		borderRadius: '100vw',
		padding: '0.4em 1.3em',
		color: 'white',
		// boxShadow:
		// 	'0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
		'&:hover': {
			backgroundColor: '#76d8f4',
			// boxShadow:
			// 	'0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);',
		},
		[theme.breakpoints.down('sm')]: {
			padding: '0.3em 1em',
		},
	},
}));

export default function ToTheTrollyNow() {
	const {
		alreadyInTrolly,
		handleAddToTrolly,
		setItemModifer,
		seTogglePizzaModifier,
	} = useContext(PizzaContext);
	const classes = useStyles();
	return (
		<Button
			className={classes.root}
			variant="contained"
			onClick={() => {
				handleAddToTrolly();
				setItemModifer(undefined);
				seTogglePizzaModifier(false);
			}}
		>
			{alreadyInTrolly ? 'Already In the Trolly' : 'Add To Basket'}
		</Button>
	);
}
