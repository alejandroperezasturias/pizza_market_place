import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/Button';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import { useContext } from 'react';
import { PizzaContext } from '../App';

const useStyles = makeStyles((theme) => ({
	button: {
		color: '#242222',
		fontSize: '1.7rem',
		borderRadius: '100vw',
		[theme.breakpoints.down('xs')]: {
			fontSize: '1.4rem',
			color: 'white',
		},
	},
}));

export default function TrollyBottom() {
	const classes = useStyles();
	const { setToogleSideBar, toogleSideBar } = useContext(PizzaContext);
	return (
		<IconButton
			color="primary"
			aria-label="Open Trolly"
			component="span"
			className={classes.button}
			onClick={() => setToogleSideBar(!toogleSideBar)}
		>
			<ShoppingCartRoundedIcon fontSize="inherit" />
		</IconButton>
	);
}
