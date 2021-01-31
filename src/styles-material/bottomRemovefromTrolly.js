import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';





export default function BottomTrollyItem({Message, callBack, item, color}) {    
    const useStyles = makeStyles((theme) => ({
        button: {
            backgroundColor: color,
            borderRadius: '100vw',
            padding: '0.1em 0.1em',
            fontSize: '0.17rem',
            color: 'white',
            '&:hover': {
                backgroundColor: color
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '0.1.7rem',
                padding: '0.4em 0.7em',
            },
        },
    }));

    const classes = useStyles();

	return (
		<Button
			className={classes.button}
            variant="contained"
            onClick={()=> {
                callBack(item)}}
		>
			{Message}
		</Button>
	);
}

