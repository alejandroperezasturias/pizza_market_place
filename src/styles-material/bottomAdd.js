import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';



const useStyles = makeStyles((theme) => ({
	button: {
		backgroundColor: '#fc6640',
		borderRadius: '100vw',
		padding: '0.4em 1.3em',
		color: 'white',
		// boxShadow:
		// 	'0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
		'&:hover': {
			backgroundColor: '#fa714f',
			// boxShadow:
			// 	'0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);',
		},
		[theme.breakpoints.down('sm')]: {
			padding: '0.3em 1em',
		},
	},
}));

export default function BottomRed({drinkInTheTrolly}) {
	const classes = useStyles();

	return (
		<Button
			color={'primary'}
			className={classes.button}
			variant="contained"
			endIcon={<FavoriteIcon />}
		>
			{drinkInTheTrolly ? 'Already In the Trolly' : 'Add To Basket'}
		</Button>
	);
}

