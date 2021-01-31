import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';


const useStyles = makeStyles((theme) => ({
	button: {
        padding: '0.4em 1.3em',
        color: 'white',
        borderRadius: '100vw',
        borderColor: 'white',
		// boxShadow:
		// 	'0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
		'&:hover': {
            backgroundColor: '#FF8464',
            borderColor: 'transparent',
            // border: '3px solid'
			// boxShadow:
			// 	'0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);',
		},
		[theme.breakpoints.down('sm')]: {
			padding: '0.1em 0.5em',
		},
	},
}));


export default function BottomBack() {
	const classes = useStyles();
	return (
		<Button
			color={'primary'}
			className={classes.button}
			variant="outlined"
			startIcon={<KeyboardBackspaceIcon />}
		>
			Back To Menu
		</Button>
	);
}
