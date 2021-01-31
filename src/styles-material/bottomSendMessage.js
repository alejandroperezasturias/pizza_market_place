import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

const useStyles = makeStyles((theme) => ({
	button: {
		backgroundColor: '#fc6640',
		borderRadius: '100vw',
		padding: '0.4em 4em',
		marginLeft: '0.5rem',
		color: 'white',
		marginTop: '1rem',
		// boxShadow:
		// 	'0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
		'&:hover': {
			backgroundColor: '#fa714f',
			// boxShadow:
			// 	'0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);',
		},
		[theme.breakpoints.down('sm')]: {
			padding: '0.4em 4em',
		},
	},
}));

export default function SendMessage() {
	const classes = useStyles();
	return (
		<Button
			type="submit"
			color={'primary'}
			className={classes.button}
			variant="contained"
			endIcon={<SendRoundedIcon />}
		>
			Send
		</Button>
	);
}
